module.exports = (plop) => {
  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/pages/{{camelCase name}}.tsx",
        templateFile: "template/pages/Component.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/stories/pages/{{camelCase name}}.stories.tsx",
        templateFile: "template/pages/stories.tsx.hbs"
      }
    ]
  });
};
