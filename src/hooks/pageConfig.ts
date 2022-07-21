import { useContext } from "react";

import { Ctx } from "../components/PageContainer";

export const usePageConfig = () => useContext(Ctx);
