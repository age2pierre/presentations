module.exports = ({ marp }) => {
  return marp
    .use(require("markdown-it-html5-media").html5Media)
    .use(require("./plugins/code"))
    .use(require("./plugins/link"))
    .use(require("markdown-it-block-embed"), {
      containerClassName: "video-embed",
    });
};
