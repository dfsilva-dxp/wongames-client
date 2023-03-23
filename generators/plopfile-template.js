module.exports = (plop) => {
  plop.setGenerator("template", {
    description: "Create a template",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your template name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/templates/{{pascalCase name}}/index.tsx",
        templateFile: "template/templates/Component.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/templates/{{pascalCase name}}/styles.ts",
        templateFile: "template/templates/styles.ts.hbs"
      },
      {
        type: "add",
        path: "../src/__test__/templates/{{camelCase name}}.test.tsx",
        templateFile: "template/templates/test.tsx.hbs"
      }
    ]
  });
};
