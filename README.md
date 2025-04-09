# Bool CLI

A command-line interface tool for the Bool framework that helps you quickly scaffold new components.

## Installation

```bash
# Using npm
npm install -g @bool-ts/cli

# Using yarn
yarn global add @bool-ts/cli

# Using bun
bun add -g @bool-ts/cli
```

## Usage

### Create New Components

The CLI provides a simple command to create new components:

```bash
bool create <type> <name>
```

Where:

-   `type`: The type of component to create (container, controller, module, or service)
-   `name`: The name of the component (will be automatically converted to the appropriate case)

### Examples

Create a new container:

```bash
bool create container user-profile
```

Create a new controller:

```bash
bool create controller auth
```

Create a new module:

```bash
bool create module payment
```

Create a new service:

```bash
bool create service notification
```

## Features

-   🚀 Quick scaffolding of Bool framework components
-   📝 Automatic file naming with proper casing
-   🔄 Automatic pluralization for controllers and services
-   ⚡ Built with Bun for fast execution
-   📦 Written in TypeScript for type safety

## Component Types

-   **Container**: For managing state and business logic
-   **Controller**: For handling HTTP requests and responses
-   **Module**: For organizing related components
-   **Service**: For implementing business logic and external service integrations

## File Naming Convention

The CLI automatically handles file naming based on the component type:

-   For containers and modules: `camelCase`
-   For controllers and services: `camelCase` (pluralized)

Example:

-   `bool create container userProfile` → `userProfile.container.ts`
-   `bool create controller auth` → `auths.controller.ts`

## License

MIT © [Trần Đức Tâm (Neo)](https://github.com/tamneo)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
