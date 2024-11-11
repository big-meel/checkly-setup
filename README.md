# Checkly Monitoring-as-code: Bootstrap Setup

This repository contains a Checkly Monitoring-as-Code project that is ready to be cloned and deployed to a checkly account. Getting started is as simple as:

1. Cloning this repository
2. Installing all dependencies with `npm i`
3. Connecting to your checkly account with `npx checkly login`
4. Start adding your Playwright Tests! 

## Adding your own tests

Running `npx checkly test` will look for any `.spec.ts` in `src/__checks__` directories and execute them in a dry run. We have added a `playwright-tests/` sub directory along with example tests to get you started.  

Running `npx checkly deploy` will deploy your checks to Checkly, and run them on a 12 hour schedule.

> Note: This scheduled time for tests along with other default configurations can be changed in the
> `checkly.config.ts` file. For more information on core settings and defaults please refer to the 
> [Checkly documentation on the topic here](https://www.checklyhq.com/docs/cli/constructs-reference/)

## Automatically deploying checks to Checkly

We have added a Github Actions workflow which automatically runs your checks and deploys to Checkly whenever you run the command `git push`. 

To allow Github Actions to authenticate your Checkly account, make sure to set the `CHECKLY_API_KEY` and `CHECKLY_ACCOUNT_ID` parameters as environment variables. You can find your Account ID in your Checkly dashboard by selecting your profile on the top right and going to your account settings. You can create an API Key by following these [steps](https://www.checklyhq.com/docs/accounts-and-users/creating-api-key/).

> Be sure to add these as [secrets to your Github Action settings](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).

## CLI Commands

Run the core CLI commands with `npx checkly <command>` 

| Command              | Action                                           |
|:---------------------|:-------------------------------------------------|
| `npx checkly test`   | Dry run all the checks in your project           |
| `npx checkly deploy` | Deploy your checks to the Checkly cloud          |
| `npx checkly login`  | Log in to your Checkly account                   |
| `npx checkly --help` | Show help for each command.                      |

[Check the docs for the full CLI reference](https://www.checklyhq.com/docs/cli/command-line-reference/).


## Questions?

Check [our CLI docs](https://www.checklyhq.com/docs/cli/), the [main Checkly docs](https://checklyhq.com/docs) or 
join our [Slack community](https://checklyhq.com/slack).
