import HomePage from "../../pages/home-page";
import AboutPage from "../../pages/about-page";
import Todo from "../../pages/todo";
import InputFields from "../../pages/input-fields";
import FormInputs from "../../pages/form-inputs";
import ZodReactHookForm from "../../pages/form-with-zod-react-hook-form.tsx";
export const list = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/about",
    element: AboutPage,
  },
  {
    path: "/todo",
    element: Todo,
  },
  {
    path: "/input",
    element: InputFields,
  },
  {
    path: "/form-inputs",
    element: FormInputs,
  },
  {
    path: "/react-hook-form-with-zod-validate",
    element: ZodReactHookForm,
  },
];
