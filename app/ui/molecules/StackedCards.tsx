"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/getPlaceholderImage";
import Link from "next/link";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Skeleton } from "../atoms/magic-ui/Skeleton";
import doGetProjects from "@/lib/actions/doGetProjects";
import useSWR from "swr";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;
const AUTO_SWIPE_INTERVAL = 5000; // 5 seconds

interface Project {
  projectName: string;
  image: string;
  featuredApp: boolean;
}

const CardSkeleton: React.FC<{ index: number }> = ({ index }) => (
  <motion.li
    style={{
      ...cardStyle,
      backgroundColor: "#ccc",
      top: index * -CARD_OFFSET,
      scale: 1 - index * SCALE_FACTOR,
      zIndex: 5 - index,
    }}
    animate={{
      top: index * -CARD_OFFSET,
      scale: 1 - index * SCALE_FACTOR,
      zIndex: 5 - index,
    }}
  >
    <Skeleton className="feature-project-container animate-pulse overflow-hidden bg-[#252526]">
      <div className="swipe-card-img">
        <div className="h-[270px] bg-[#252526] rounded" />
      </div>
    </Skeleton>
  </motion.li>
);

const StackedCards: React.FC = () => {
  const {
    data: projects = [],
    error,
    isLoading,
  } = useSWR<Project[]>("projects", doGetProjects);
  const [placeholders, setPlaceholders] = useState<string[]>([]);
  const [placeholdersLoading, setPlaceholdersLoading] = useState(true);
  const autoSwipeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const featuredProjects = useMemo(
    () => projects?.filter((project) => project.featuredApp),
    [projects]
  );

  const [cards, setCards] = useState<undefined | Project[]>(featuredProjects);

  useEffect(() => {
    setCards(featuredProjects);
  }, [featuredProjects]);

  useEffect(() => {
    const fetchPlaceholders = async () => {
      if (!projects?.length) return;
      setPlaceholdersLoading(true);
      const placeholdersData = await Promise.all(
        projects.map(async (data) => {
          const { placeholder } = await getPlaceholderImage(data.image);
          return placeholder;
        })
      );
      setPlaceholders(placeholdersData);
      setPlaceholdersLoading(false); 
    };

    fetchPlaceholders();
  }, [projects]);

  const moveToEnd = (from: number): void => {
    setCards(
      (prevCards) => prevCards && move(prevCards, from, prevCards.length - 1)
    );
    resetAutoSwipeTimer();
  };

  const autoSwipe = () => {
    setCards(
      (prevCards) => prevCards && move(prevCards, 0, prevCards.length - 1)
    );
  };

  const resetAutoSwipeTimer = () => {
    if (autoSwipeTimerRef.current) {
      clearTimeout(autoSwipeTimerRef.current);
    }
    autoSwipeTimerRef.current = setTimeout(autoSwipe, AUTO_SWIPE_INTERVAL);
  };

  useEffect(() => {
    resetAutoSwipeTimer();
    return () => {
      if (autoSwipeTimerRef.current) {
        clearTimeout(autoSwipeTimerRef.current);
      }
    };
  }, [cards]);

  if (error) return <div>Error loading projects</div>;

  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {isLoading || placeholdersLoading
          ? Array.from(Array(3).keys()).map((_, index) => (
              <CardSkeleton key={index} index={index} />
            ))
          : cards &&
            cards.map((data, index) => {
              const blur = placeholders[index];
              const canDrag = index === 0;

              return (
                <motion.li
                  key={data.projectName}
                  style={{
                    ...cardStyle,
                    backgroundColor: "#252526",
                    boxShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)",
                    cursor: canDrag ? "grab" : "auto",
                  }}
                  className="-mt-3.5"
                  animate={{
                    top: index * -CARD_OFFSET,
                    scale: 1 - index * SCALE_FACTOR,
                    zIndex: cards.length - index,
                  }}
                  drag={canDrag ? "y" : false}
                  dragConstraints={{
                    top: 0,
                    bottom: 0,
                  }}
                  dragElastic={1}
                  dragListener={canDrag}
                  onDragEnd={() => moveToEnd(index)}
                >
                  <div className="feature-project-container pt-4 px-5 text-sm">
                    <span
                      className="feature-project-name text-[#ff605c] wrap font-normal text-base tracking-wide"
                      style={{ fontFamily: "Consolas" }}
                    >
                      <Link href="/">
                        featured_project //{" "}
                        <span className="text-white">
                          _{data.projectName.split(" ").join("_")}
                        </span>
                      </Link>
                      <span>
                        <MdOutlineNavigateNext
                          className="more-arrow"
                          style={{ marginLeft: "0em", display: "inline" }}
                          size={20}
                          color="#fff"
                        />
                      </span>
                    </span>
                    <div
                      className="swipe-card-img mt-2 overflow-hidden rounded-md box-border"
                      style={{
                        position: "relative",
                        height: "195px",
                        width: "100%",
                      }}
                    >
                      <Image
                        alt="project-img"
                        placeholder="blur"
                        blurDataURL={blur}
                        src={data.image}
                        layout="fill"
                        objectFit="cover"
                        sizes="100%"
                        className="swipe-img h-[320px] overflow-hidden"
                      />
                    </div>
                  </div>
                </motion.li>
              );
            })}
      </ul>
    </div>
  );
};

const wrapperStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const cardWrapStyle: React.CSSProperties = {
  position: "relative",
  width: "355px",
  height: "355px",
};

const cardStyle: React.CSSProperties = {
  position: "absolute",
  width: "440px",
  height: "270px",
  borderRadius: "8px",
  transformOrigin: "top center",
  listStyle: "none",
  background: "#252526",
  boxShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)",
};

export default StackedCards;
