import { APP_URL } from "../env";
import { PageHelper } from "./util";

const page = new PageHelper(APP_URL);

export class Main {
  static HomePage = page.create("/", {
    root: "#root",
  });
}
