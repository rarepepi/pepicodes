export type Contribution = {
  date: string;
  count: number;
  level: number;
};

export type ContributionData = {
  total: Record<string, number>;
  contributions: Contribution[];
};

export const parseContributionData = (value: unknown) => {
  if (!value || typeof value !== "object") return null;

  const data = value as Partial<ContributionData>;
  const totals = data.total ? Object.entries(data.total) : [];
  const validTotals =
    typeof data.total === "object" &&
    totals.length > 0 &&
    totals.every(([year, total]) => /^\d{4}$/.test(year) && Number.isFinite(total));
  const validDays =
    Array.isArray(data.contributions) &&
    data.contributions.every(
      (day) =>
        /^\d{4}-\d{2}-\d{2}$/.test(day.date) &&
        Number.isFinite(day.count) &&
        Number.isInteger(day.level) &&
        day.level >= 0 &&
        day.level <= 4
    );

  return validTotals && validDays ? (data as ContributionData) : null;
};

export const contributionYears = (data: ContributionData) =>
  Object.keys(data.total).sort((a, b) => Number(a) - Number(b));

export const contributionsForYear = (
  data: ContributionData,
  year: string,
  through?: string
) =>
  data.contributions
    .filter(
      ({ date }) => date.startsWith(year) && (!through || date <= through)
    )
    .sort((a, b) => a.date.localeCompare(b.date));
