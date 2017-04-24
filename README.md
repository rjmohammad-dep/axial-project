# Axial Projects Lite

Projects are created by Axial members to indicate and qualify their interest in financing deals.

# Exercise

This exercise is a simple application to manage those projects. It should contain:

- View of all projects, with link to edit
- View with form to create or edit project
- Directive(s) implementing behavior for financial inputs

## Project edit form

The create/edit project form should allow editing the project fields:

- Headline
- Target Check Size (mimimum and maximum)
- Target Revenue (mimimum and maximum)
- Target EBITDA (mimimum and maximum)

### Financial inputs

Each financial input (Check Size, Revenue and EBITDA) should:
- expand predefined shortcuts to larger numbers.
  (m -> millions, k-> thousands.
  if a value of '2k' is entered by the user, the value should be expanded to 2000.)
- format the number displayed in the input so it contain commas.
- ensure the value is a number.

### Financial range validation

In addition to the financial input formatting, the min/max ranges should:
- ensure the number entered for the minimum is not greater than the maximum
- ensure the number entered for the maximum is not less than the minimum
- if one number is entered for a range, ensure the other is specified

# Further

- We're not set on seeing all features completed. Finishing some well is preferred over all in a hurry.
- Use AngularJS or Angular.
- Use a familiar UI library (Material, Bootstrap, etc).
- Use a familiar build tool.
- If expedient, use a 'starter' (such as https://github.com/angular/angular-seed or https://github.com/angular/angular-cli).
- No persistence beyond browser memory is needed when creating / editing projects.
