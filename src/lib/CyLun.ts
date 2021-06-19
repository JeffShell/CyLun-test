import Dialog from "./Dialog.vue";
import Button from "./Button.vue";
import Switch from "./Switch.vue";
import Tabs from "./Tabs.vue";
import Tab from "./Tab.vue";
import {ComponentOptions} from "vue";

export default {
  install: (app: ComponentOptions) => {
    app.component("Switch", Switch);
    app.component("Dialog", Dialog);
    app.component("Button", Button);
    app.component("Tabs", Tabs);
    app.component("Tab", Tab);
  }
}