import { useRouter } from "next/router";
import * as React from "react";

const useYoutube = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/videos");
  }, [router]);
};

export default useYoutube;
