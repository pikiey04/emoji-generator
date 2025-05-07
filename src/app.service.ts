import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEmoji(index?: number): string {
    console.log(`Router Handler`);
    //return a random emoji
    const emojis = this.getEmojis();
    const emojisIndex =
      typeof index !== `undefined`
        ? index
        : Math.floor(Math.random() * emojis.length);
    // const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[emojisIndex];
  }

  getEmojis(): string[] {
    return [
      `🚀`,
      `🔥`,
      `👍`,
      `🙌`,
      `👋`,
      `👏`,
      `🎉`,
      `🤩`,
      `🥳`,
      `🤘`,
      `🤙`,
      `👌`,
      `👊`,
      `👀`,
    ];
  }
}
