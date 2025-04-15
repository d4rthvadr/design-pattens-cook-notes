interface WidgetPlugin<T = {}> {
  name: string;
  onInit?(data: any): void;
  onSave?(wArgs?: T): void;
  onStart?(): void;
}

class XPLogger implements WidgetPlugin {
  name = this.constructor.name;
  onInit() {
    console.log(`[${this.name}] initialized`);
  }
  onSave(data?: string): void {
    console.log("Plugin A saved");
  }
}

class PluginManager {
  plugins: Record<string, WidgetPlugin> = {};
  markdownEditor?: MarkdownEditor;

  register(plugin: WidgetPlugin): void {
    if (this.plugins[plugin.name]) {
      throw new Error(`Plugin ${plugin.name} already registered`);
    }
    this.plugins[plugin.name] = plugin;
  }

  deregister(plugin: WidgetPlugin): void {
    if (!this.plugins[plugin.name]) {
      console.warn(`Plugin ${plugin.name} not registered`);
      return;
    }
    delete this.plugins[plugin.name];
  }

  onInit(markdownEditor: MarkdownEditor) {
    this.markdownEditor = markdownEditor;
    for (const plugin of Object.values(this.plugins)) {
      plugin.onInit?.(markdownEditor.getContent());
    }
  }

  onSave(wArgs?: any) {
    console.log("Saving plugins...", Object.values(this.plugins).length);
    for (const plugin of Object.values(this.plugins)) {
      plugin.onSave?.(wArgs);
    }
  }
}

class MarkdownEditor {
  constructor(private pluginManager: PluginManager) {
    this.pluginManager.onInit(this);
  }

  getContent() {
    return "Markdown content";
  }

  render() {
    console.log("Rendering Markdown Editor...");
  }
  save() {
    console.log("Saving Markdown Editor...");
    this.pluginManager.onSave();
  }
}

function main() {
  // Usage
  const pluginManager = new PluginManager();
  pluginManager.deregister(new XPLogger());
  const markdownEditor = new MarkdownEditor(pluginManager);

  markdownEditor.render();
}

main();
