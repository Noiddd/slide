import { usePathname } from "next/navigation";

export const usePaths = () => {
  const pathname = usePathname();

  const paths = pathname.split("/");
  let page = paths[paths.length - 1];

  return {
    page,
    paths,
  };
};
