# 🔗 Linxz | Share links without hesitation

<p align="center">
    <img src="repo/preview.png" />
</p>


## About

Linxz is an easy-to-use, self-hostable, and private link sharing platform. It provides a simple interface to shorten links and includes granular control over their experation. You can specify a date and time or a number of clicks until the link is deleted forever. Or, if you want it forever, that works too.

## Self-Hosting
You can technically get it up and running yourself right now, but there is a Docker image on the way!

## Contributing
If you would like to contribute, please feel free to fork the repository and submit a pull request. I will review it as soon as possible. I've been enjoying [Bun](https://bun.sh/), but feel free to develop with your preferred runtime.

> **Note:** To use this without Bun, you may need to change some `package.json` scripts, add a lock file, etc. Please do not include these changes in your pull request.

### Running for Development

All steps will use `bun` commands, but you're welcome to replace them with whatever you prefer.

1. Clone the repository
2. Run `bun install`. I've been [Bun](https://bun.sh/), but it should work on any other runtime (assuming you change a few of the `package.json` scripts).
3. Add a `.env` file with the following contents
4. Run `bun dev`.