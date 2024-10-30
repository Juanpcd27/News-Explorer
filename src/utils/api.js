export const checkServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getItems = () => {
  return new Promise((resolve, reject) =>
    resolve([
      {
        status: "ok",
        totalResults: 10,
        articles: [
          {
            source: {
              id: null,
              name: "Biztoc.com",
            },
            author: "news.google.com",
            title:
              "Tesla robotaxi anticipation hits fever pitch ahead of debut",
            description:
              "Tesla robotaxi anticipation hits fever pitch ahead of debut Axios\nTesla robotaxi event comes after a decade of unfulfilled promises from Elon Musk CNBC\nElon Musk is promising to unveil the future of Tesla tonight CNN\nTesla is expected to unveil a robotaxi ton…",
            url: "https://biztoc.com/x/1c6bb1209e1f5bc4",
            urlToImage: "https://biztoc.com/cdn/803/og.png",
            publishedAt: "2024-10-11T02:46:44Z",
            content:
              "Tesla robotaxi anticipation hits fever pitch ahead of debut AxiosTesla robotaxi event comes after a decade of unfulfilled promises from Elon Musk CNBCElon Musk is promising to unveil the future of Te… [+131 chars]",
          },
          {
            source: {
              id: null,
              name: "Biztoc.com",
            },
            author: "barrons.com",
            title: "Robotaxi Event Start Delayed for 'Medical Emergency'",
            description:
              "Updated 5 min ago\nRobotaxi Event Start Delayed for 'Medical Emergency'\nTesla CEO Elon Musk on X said the Robotaxi Event, which was scheduled to start at 10 p.m. Eastern time tonight, is delayed because a person in attendance had \"a medical emergency.\"\nHe adde…",
            url: "https://biztoc.com/x/59a1156fef58f75e",
            urlToImage: "https://biztoc.com/cdn/803/og.png",
            publishedAt: "2024-10-11T02:46:27Z",
            content:
              "Updated 5 min agoRobotaxi Event Start Delayed for 'Medical Emergency'Tesla CEO Elon Musk on X said the Robotaxi Event, which was scheduled to start at 10 p.m. Eastern time tonight, is delayed because… [+130 chars]",
          },
          {
            source: {
              id: null,
              name: "Investing.com",
            },
            author: "Reuters",
            title:
              "Asian shares set for first weekly loss in five, China stimulus eyed",
            description:
              "Asian shares set for first weekly loss in five, China stimulus eyed",
            url: "https://www.investing.com/news/economy-news/asian-shares-set-for-first-weekly-loss-in-five-china-stimulus-eyed-3659005",
            urlToImage:
              "https://i-invdn-com.investing.com/news/STOCK-EXCHANGE-RUSSIAN-TRADING-SYSTEMS_800x533_L_1414427815.jpg",
            publishedAt: "2024-10-11T02:23:15Z",
            content:
              "By Stella Qiu\r\nSYDNEY (Reuters) - Asian shares were headed for the first weekly loss in five as the stunning rally in Chinese shares took a breather, although all eyes are on the details of the much-… [+3045 chars]",
          },
          {
            source: {
              id: null,
              name: "Biztoc.com",
            },
            author: "news.google.com",
            title:
              "Pfizer and Starboard Value, Tesla Robotaxi Day: Market Domination Overtime",
            description:
              "Pfizer and Starboard Value, Tesla Robotaxi Day: Market Domination Overtime Yahoo Finance\nPfizer’s stock dips after two former execs say they won’t support Starboard MarketWatch\nFormer Pfizer CEO, finance chief step back from Starboard's activist campaign CNBC…",
            url: "https://biztoc.com/x/d8970282010cdb89",
            urlToImage: "https://biztoc.com/cdn/803/og.png",
            publishedAt: "2024-10-11T02:13:52Z",
            content:
              "Pfizer and Starboard Value, Tesla Robotaxi Day: Market Domination Overtime Yahoo FinancePfizers stock dips after two former execs say they wont support Starboard MarketWatchFormer Pfizer CEO, finance… [+130 chars]",
          },
        ],
      },
    ])
  );
};
