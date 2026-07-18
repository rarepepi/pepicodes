"use client";

import {
  ContributionData,
  contributionYears,
  contributionsForYear,
  parseContributionData,
} from "@/lib/github-contributions";
import Link from "next/link";
import { useEffect, useState } from "react";

const USERNAME = "rarepepi";
const LEVELS = [
  "bg-muted",
  "bg-primary/25",
  "bg-primary/45",
  "bg-primary/70",
  "bg-primary",
];

export function GitHubContributions() {
  const [data, setData] = useState<ContributionData | null>();

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=all`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub contributions unavailable");
        return response.json();
      })
      .then((value) => setData(parseContributionData(value)))
      .catch((error) => {
        if (error.name !== "AbortError") setData(null);
      });

    return () => controller.abort();
  }, []);

  if (data === undefined) {
    return <div className="h-80 rounded-2xl border border-border/70 bg-card/40" />;
  }

  if (data === null) {
    return (
      <Link
        href={`https://github.com/${USERNAME}`}
        target="_blank"
        className="block rounded-2xl border border-border/70 bg-card/50 p-4 text-sm text-muted-foreground hover:text-foreground"
      >
        Contribution history is taking a break. View it on GitHub ↗
      </Link>
    );
  }

  const years = contributionYears(data).reverse();
  const total = Object.values(data.total).reduce((sum, count) => sum + count, 0);
  const today = new Date().toISOString().slice(0, 10);
  const currentYear = today.slice(0, 4);
  const eras = [
    {
      name: "Professional work",
      range: "2022—Present",
      years: years.filter((year) => Number(year) >= 2022),
    },
    {
      name: "NYU",
      range: "2018—2022",
      years: years.filter(
        (year) => Number(year) >= 2018 && Number(year) < 2022
      ),
    },
    {
      name: "High school",
      range: "2016—2018",
      years: years.filter((year) => Number(year) < 2018),
    },
  ].filter((era) => era.years.length > 0);

  return (
    <div className="rounded-2xl border border-border/70 bg-card/50 p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-medium">
          {total.toLocaleString()} public contributions
        </p>
        <p className="text-xs text-muted-foreground">
          {eras.length} chapters · {years.length} years
        </p>
      </div>

      <div
        tabIndex={0}
        aria-label={`${total.toLocaleString()} GitHub contributions from ${years.at(-1)} through ${years[0]}`}
        className="max-h-[30rem] overflow-y-auto overscroll-contain pr-2 [scrollbar-gutter:stable] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div>
          {eras.map((era) => {
            const eraTotal = era.years.reduce(
              (sum, year) => sum + data.total[year],
              0
            );

            return (
              <section
                key={era.name}
                className="grid gap-3 border-t border-border/70 py-5 first:border-0 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,48rem)_minmax(10rem,1fr)] lg:gap-8"
              >
                <div className="relative border-l border-primary/30 pl-4 lg:order-2 lg:pl-6">
                  <span className="absolute -left-1 top-1 size-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.45)]" />
                  <div className="lg:sticky lg:top-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                      {era.range}
                    </p>
                    <h3 className="mt-1 text-sm font-medium">{era.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {eraTotal.toLocaleString()} contributions
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-border/60 lg:order-1">
                  {era.years.map((year) => {
                    const isCurrent = year === currentYear;
                    const days = contributionsForYear(
                      data,
                      year,
                      isCurrent ? today : undefined
                    );

                    return (
                      <div
                        key={year}
                        className="grid gap-2 py-3 first:pt-0 last:pb-0 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-4"
                      >
                        <div className="flex items-baseline justify-between gap-3 text-xs sm:block">
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium">{year}</span>
                            {isCurrent && (
                              <span className="text-[9px] font-semibold uppercase tracking-wider text-primary">
                                YTD
                              </span>
                            )}
                          </div>
                          <span className="text-muted-foreground sm:mt-1 sm:block">
                            {data.total[year].toLocaleString()}
                          </span>
                        </div>
                        <div className="grid w-max grid-flow-col grid-rows-7 gap-[clamp(1px,0.25vw,3px)] [grid-auto-columns:clamp(3px,1vw,10px)]">
                          {days.map((day, index) => (
                            <span
                              key={day.date}
                              title={`${day.date}: ${day.count} contributions`}
                              className={`aspect-square w-full rounded-[1px] sm:rounded-[2px] ${LEVELS[day.level]}`}
                              style={
                                index === 0
                                  ? {
                                      gridRowStart:
                                        new Date(
                                          `${day.date}T00:00:00Z`
                                        ).getUTCDay() + 1,
                                    }
                                  : undefined
                              }
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
        <span>Less</span>
        {LEVELS.map((level) => (
          <span key={level} className={`size-2.5 rounded-[2px] ${level}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
