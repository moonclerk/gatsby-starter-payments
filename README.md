![Header](https://res.cloudinary.com/moonclerk/image/upload/v1589814003/git-header_njliva.jpg)

# gatsby-starter-payments

A Gatsby starter for creating SaaS landing pages using MoonClerk to accept payments. Easily create lightning fast static landing pages that accept payments and look good.

## ✨ Features

- SEO optimized
- Fully responsive
- Gatsby images
- MoonClerk Payment Forms
- Open source illustrations from Icons8
- Google Analytics
- Includes React Helmet to allow editing site meta tags
- Includes plugins for easy, beautiful typography
- Styling with styled-components
- Organized using ABEM

## ⚡️ Getting Started

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the blog starter.

    ```shell
    # create a new Gatsby site using the blog starter
    gatsby new gatsby-starter-payments https://github.com/moonclerk/gatsby-starter-payments
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-starter-payments/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `gatsby-starter-payments` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby and this starter are licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🔧 Configure

### MoonClerk Forms

1. Create a [MoonClerk](https://www.moonclerk.com/) account if you don't have one:
2. Authenticate your account with stripe
3. Create a form in MoonClerk and copy embed code
4. Open _`/src/components/molecules/sectionCheckout.js`_
5. Take id from embed code and paste it here: _`<Form id="your-id-here"></Form>`_
6. Open _`/static/moonclerk.js`_
7. Paste the script from the embed code and save the file
8. Run **`gatsby build && gatsby serve`** \*currently gatsby does not fire static scripts in gatsby develop, there's a few issue requests that are asking for this to be resolved.

## 🚀 Deploy

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/moonclerk/gatsby-starter-payments)

The quickest way to try it out is by running it on a pre-configured starter site with Netlify. After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from this starter. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete.

### Manual Deploy

Read this guide by Netlify on using Netlify and Gatsby together. [A Step-by-Step Guide: Gatsby on Netlify](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/)

1. Create a git repo
2. Create a [Netlify](https://www.netlify.com/) account
3. Link your repository in Netlify
4. Authorize Netlify
5. Choose your repository
6. Configure your settings
7. Build your site
8. Done

## 💡 Contributions

PRs are welcome! Consider contributing to this project if you are missing feature that is also useful for others.

# Copyright & License

Copyright (c) 2020 [MoonClerk](https://moonclerk.com) - Released under the [MIT license](LICENSE).
