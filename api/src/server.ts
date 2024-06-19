import { app } from "./app";
import { populateDatabase } from "./utils/populateDatabase";

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  populateDatabase();
  console.log(`API successfully started at port ${port}`);
});
