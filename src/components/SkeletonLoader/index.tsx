import ContentLoader from "react-content-loader";

export const SkeletonLoader = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={300}
    viewBox="0 0 250 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="250" height="200" />
    <rect x="10" y="220" rx="3" ry="3" width="80" height="10" />
    <rect x="100" y="220" rx="3" ry="3" width="60" height="10" />
    <rect x="170" y="220" rx="3" ry="3" width="70" height="10" />
  </ContentLoader>
);
