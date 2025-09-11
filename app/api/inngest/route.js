import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";

//Create an API that serves zero fuinctions
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        /*your functions will be passed here later! */
    ],
});
