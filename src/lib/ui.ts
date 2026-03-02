type Action = {
  label?: string;
  onclick?: () => void;
};

type ToastOptions = {
  category?: "success" | "info" | "warning" | "error";
  title: string;
  description?: string;
  duration?: number;
  action?: Action;
  cancel?: Action;
};

export function toast({ category, title, description, duration }: ToastOptions) {
  document.dispatchEvent(
    new CustomEvent("basecoat:toast", {
      detail: {
        config: {
          category,
          title,
          description,
          cancel: {
            label: "Dismiss",
          },
          duration,
        },
      },
    }),
  );
}

export function setupTheme() {
  try {
    const stored = localStorage.getItem("themeMode");
    if (stored ? stored === "dark" : matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  } catch (_) {}

  const apply = (dark: boolean) => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("themeMode", dark ? "dark" : "light");
    } catch (_) {}
  };

  document.addEventListener("basecoat:theme", (event) => {
    const mode = (event as CustomEvent<{ mode: string }>).detail?.mode;
    apply(
      mode === "dark"
        ? true
        : mode === "light"
          ? false
          : !document.documentElement.classList.contains("dark"),
    );
  });
}
