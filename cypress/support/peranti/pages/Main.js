import { APP_URL } from "../env";
import { PageHelper } from "./util";

const page = new PageHelper(APP_URL);

export class Main {
  static HomePage = page.create("/", {
    root: "#root",
  });

  static SidebarItem = ".ToolSidebarItem";

  static CloseTabButton =
    "#root > div > div.AppContainer > div.AppContent > div.SessionTabbar > div.SessionTabbar-inner > div.SessionTabbar-inner-body > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.SessionTabbarList > div > div.SessionTabbar-item-session-body.active > div.SessionTabbar-item-session-icon";

  static InputCodeMirror =
    "#root > div > div.AppContainer > div.AppContent > div.AppletViewer > div.AppletViewer-inner > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > form > div > div.CodeMirrorContainer > div > div > div > div.cm-scroller > div.cm-content";

  static OutputCodeMirror =
    "#root > div > div.AppContainer > div.AppContent > div.AppletViewer > div.AppletViewer-inner > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div > div > div.CodeMirrorContainer > div > div > div > div.cm-scroller > div.cm-content";
}
