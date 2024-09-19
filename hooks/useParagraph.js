export function splitTextIntoParagraphs(text, maxWordsPerParagraph = 50) {
  // Split the text into sentences

  const sentences = text?.match(/[^\.!\?]+[\.!\?]+/g) || [];

  const paragraphs = [];
  let currentParagraph = [];
  let wordCount = 0;

  sentences?.forEach((sentence) => {
    const sentenceWords = sentence?.trim().split(" ");
    if (wordCount + sentenceWords?.length <= maxWordsPerParagraph) {
      currentParagraph.push(sentence?.trim());
      wordCount += sentenceWords?.length;
    } else {
      paragraphs.push(currentParagraph.join(" "));
      currentParagraph = [sentence?.trim()];
      wordCount = sentenceWords?.length;
    }
  });

  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph.join(" "));
  }

  const capitalizeFirstWord = (paragraph) => {
    const sentences = paragraph?.split(". ");
    if (sentences?.length > 0) {
      sentences[0] =
        sentences[0]?.charAt(0).toUpperCase() + sentences[0].slice(1);
    }
    return sentences?.join(". ");
  };

  const capitalizedParagraphs = () =>
    paragraphs.map((paragraph) => {
      return capitalizeFirstWord(paragraph);
    });

  return capitalizedParagraphs().join("\n\n");
}
