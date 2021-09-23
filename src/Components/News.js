import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters"
      },
      author: null,
      title:
        "U.S. court orders Facebook to release antiRohingya content records for genocide case  Reuters",
      description:
        'A U.S. federal judge has ordered Facebook <a href="https://www.reuters.com/companies/FB.O" target="_blank">(FB.O)</a> to release records of accounts connected to antiRohingya violence in Myanmar that the social media giant had shut down, rejecting its argume…',
      url:
        "https://www.reuters.com/business/mediatelecom/uscourtcompelsfacebookreleaserecordsantirohingyacontentreport20210923/",
      urlToImage:
        "https://www.reuters.com/resizer/3m7iscj1GlyJh81NHQP13hHcm8=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/L5FNVMXEIFJPTDAZCMEXKQ3ZAQ.jpg",
      publishedAt: "20210923T10:02:00Z",
      content:
        "Sept 23 (Reuters)  A U.S. federal judge has ordered Facebook (FB.O) to release records of accounts connected to antiRohingya violence in Myanmar that the social media giant had shut down, rejecting… [+3210 chars]"
    },
    {
      source: {
        id: "thewallstreetjournal",
        name: "The Wall Street Journal"
      },
      author: "Joe Wallace",
      title:
        "Stock Futures Point to Extended Rally, as Investors Eye Evergrande Payment  The Wall Street Journal",
      description:
        "Investors express cautious hope that trouble at indebted property giant China Evergrande can be contained",
      url:
        "https://www.wsj.com/articles/globalstockmarketsdowupdate0923202111632382759",
      urlToImage: "https://images.wsj.net/im405576/social",
      publishedAt: "20210923T08:47:00Z",
      content: null
    },
    {
      source: {
        id: null,
        name: "Fox Business"
      },
      author: "Associated Press",
      title:
        "Stocks higher day after Fed signals a tapering could begin 'soon,' projects future interest rate hike  Fox Business",
      description:
        "U.S. equity futures were trading higher one day after the Fed signaled a tapering could begin 'soon' as well as projecting an interest rate hike in 2022.",
      url:
        "https://www.foxbusiness.com/markets/stockshigherdayafterfedsignalsataperingcouldbeginsoonprojectsinterestratehike",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/11/0/0/Stocks11.23.jpg?ve=1&tl=1",
      publishedAt: "20210923T08:30:33Z",
      content:
        "U.S. equity futures\r\n were trading higher one day after the Fed signaled a tapering could begin 'soon' as well as projecting an interest rate hike in 2022.\r\nStocks in this Article\r\nThe U.S. central b… [+6048 chars]"
    },
    {
      source: {
        id: null,
        name: "TMZ"
      },
      author: "TMZ Staff",
      title:
        "ExJames Bond George Lazenby Says Woman Can Be 007, Defends Daniel Craig  TMZ",
      description:
        "James Bond actor George Lazenby says a woman can certainly play the role, but defends Daniel Craig's comment too.",
      url:
        "https://www.tmz.com/2021/09/23/jamesbondstargeorgelazenbyfemaleplayroledefendsdanielcraig/",
      urlToImage:
        "https://imagez.tmz.com/image/cb/16by9/2021/09/22/cb6870c9d5f94f2491920796996d33c3_xl.jpg",
      publishedAt: "20210923T07:40:00Z",
      content:
        "Daniel Craig's taking heat for saying a woman shouldn't play James Bond because women deserve better parts, but another 007 is defending him  while adding his own slightly different take.\r\nGeorge L… [+1505 chars]"
    },
    {
      source: {
        id: "thewashingtonpost",
        name: "The Washington Post"
      },
      author: "Rachel Pannett",
      title:
        "France to bill Australia over submarine deal as Britain's Johnson tells Macron: 'Donnezmoi un break'  The Washington Post",
      description:
        "Australia agreed to buy 12 submarines from France before it joined the AUKUS defense pact and the break fee — on top of more than $1 billion reportedly already spent — could be substantial.",
      url:
        "https://www.washingtonpost.com/world/2021/09/23/submarinefranceaustraliaborisjohnson/",
      urlToImage:
        "https://www.washingtonpost.com/wpapps/imrs.php?src=https://arcanglerfishwashpostprodwashpost.s3.amazonaws.com/public/SPHN3NQ2D4I6ZPVIGCHKCNCZJ4.jpg&w=1440",
      publishedAt: "20210923T06:39:15Z",
      content:
        "Pommellet said that Australia had told his company, which is majorityowned by the French taxpayer, to go ahead with a new phase of the program on the very morning last week that the contract was ter… [+3456 chars]"
    },
    {
      source: {
        id: null,
        name: "PEOPLE"
      },
      author: "Gabrielle Duncan",
      title:
        "Madonna's Daughter Lourdes Leon Wows in Bra and ThighHigh Boots for Rihanna's Savage X Fenty Show  Yahoo Entertainment",
      description:
        "Lourdes Leon teased her debut appearance in the third Savage X Fenty show, premiering Sept. 24 on Amazon Prime",
      url:
        "https://people.com/style/madonnadaughterlourdesleonwowsinbraandthighhighbootsforrihannasavagexfentyshow/",
      urlToImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B568%2C272%5D&w=1184&h=592&url=https%3A%2F%2Fstatic.onecms.io%2Fwpcontent%2Fuploads%2Fsites%2F20%2F2021%2F08%2F06%2Flourdesleon.jpg",
      publishedAt: "20210923T05:20:47Z",
      content:
        "Lourdes Leon is ready for her Savage X Fenty debut!\r\nOn Wednesday, Madonna's daughter, 24, teased her appearance in the third installment of Rihanna's annual lingerie extravaganza by revealing her ey… [+3157 chars]"
    },
    {
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "Madeline Holcombe, CNN",
      title:
        "'We are not out of the woods yet.' Expert expects US Covid19 cases to climb in the coming weeks  CNN",
      description:
        "New Covid19 cases have been on the decline over the last week  and while that development is hopeful, one expert is warning it's not time to let down the guard with the Delta variant still spreading and winter on the way.",
      url:
        "https://www.cnn.com/2021/09/23/health/uscoronavirusthursday/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210922232242northmiamifloridacovid19test09092021supertease.jpg",
      publishedAt: "20210923T05:07:00Z",
      content:
        "(CNN)New Covid19 cases have been on the decline over the last week  and while that development is hopeful, one expert is warning it's not time to let down the guard with the Delta variant still sp… [+4774 chars]"
    },
    {
      source: {
        id: null,
        name: "BBC News"
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Taiwan seeks entry into key trade pact before China  BBC News",
      description:
        "Taiwan has warned that its application into the CPTPP could be affected should China join first.",
      url: "https://www.bbc.com/news/worldasia58660843",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/107BC/production/_120661576_gettyimages912479820.jpg",
      publishedAt: "20210923T04:54:27Z",
      content:
        "image source, Getty Images\r\nimage captionTaiwan considers itself as an independent nation, but China regards it as a breakaway province\r\nTaiwan has filed an application to join a key AsiaPacific tra… [+2485 chars]"
    },
    {
      source: {
        id: "associatedpress",
        name: "Associated Press"
      },
      author: "Juan A. Lozano, Maria Verza",
      title:
        "WhatsApp, social posts helped lead Haitian migrants to Texas  Associated Press",
      description:
        "DEL RIO, Texas (AP) — For the final leg of his journey from Chile to the United States, Haitian migrant Fabricio Jean followed detailed instructions sent to him via WhatsApp from his brother in New Jersey who had recently taken the route to the Texas border.",
      url: "https://apnews.com/872d4b59f5f68f0a63b32704aa961021",
      urlToImage:
        "https://storage.googleapis.com/afsprod/media/0a557e8636414f58832c48f74870206b/3000.jpeg",
      publishedAt: "20210923T04:30:00Z",
      content:
        "DEL RIO, Texas (AP) For the final leg of his journey from Chile to the United States, Haitian migrant Fabricio Jean followed detailed instructions sent to him via WhatsApp from his brother in New Jer… [+7484 chars]"
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment"
      },
      author: "DAVID RISING",
      title:
        "Tensions grow as US, allies deepen IndoPacific involvement  Yahoo News",
      description:
        "With increasingly strong talk in support of Taiwan, a new deal to supply Australia with nuclear submarines, and the launch of a European strategy for greater...",
      url: "https://news.yahoo.com/tensionsgrowusalliesdeepen034716346.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/O327qr2JMey3Vx_10r6QIg/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA/https://s.yimg.com/uu/api/res/1.2/2fe4CTWZppbXaf1gYTGQEQ~B/aD0yMTYwO3c9MzI0MDthcHBpZD15dGFjaHlvbg/https://media.zenfs.com/en/ap.org/33ee4b5bcb5a673cadc025a0b16c2c45",
      publishedAt: "20210923T04:15:49Z",
      content:
        "BANGKOK (AP) With increasingly strong talk in support of Taiwan, a new deal to supply Australia with nuclear submarines, and the launch of a European strategy for greater engagement in the IndoPacif… [+7647 chars]"
    },
    {
      source: {
        id: null,
        name: "New York Times"
      },
      author: "Melissa Eddy",
      title:
        "Days Before Germans Vote, Merkel Is Where She Didn’t Want to Be: On the Stump  The New York Times",
      description:
        "The race for chancellor is tightening, but Angela Merkel says Armin Laschet is the man to fill her shoes.",
      url:
        "https://www.nytimes.com/2021/09/23/world/europe/germanyelection.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/09/22/world/23germany/22germanyfacebookJumbo.jpg",
      publishedAt: "20210923T04:10:08Z",
      content:
        "I came to honor Ms. Merkel, our chancellor and representative, she said, adding that throughout her 30 years representing the constituency, Ms. Merkel would visit regularly, attending meetings and en… [+1232 chars]"
    },
    {
      source: {
        id: "reuters",
        name: "Reuters"
      },
      author: null,
      title:
        "U.S. business optimism in China rebounds to pretrade war levels survey  Reuters",
      description:
        "U.S. companies' optimism about business conditions in China has recovered to hit threeyear highs even though the firms have reservations about Beijing's COVID19 policy, an annual survey showed on Thursday.",
      url:
        "https://www.reuters.com/world/china/usbusinessoptimismchinareboundspretradewarlevelssurvey20210923/",
      urlToImage:
        "https://www.reuters.com/resizer/14otj6xmG5375Tnmsb8RgPodXTE=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/SHHPO3NEX5MXPF6P62YQOQQQO4.jpg",
      publishedAt: "20210923T04:08:00Z",
      content:
        "People walk past an office compound in Beijing's Central Business District (CBD), China, July 13, 2021. REUTERS/Tingshu WangSHANGHAI, Sept 23 (Reuters)  U.S. companies' optimism about business condi… [+3063 chars]"
    },
    {
      source: {
        id: null,
        name: "NPR"
      },
      author: "",
      title:
        "Isko Moreno, Mayor Of Manila City, Launches Bid For President Of The Philippines  NPR",
      description:
        "Isko Moreno, the celebrity mayor of Manila City, has launched a bid to succeed Rodrigo Duterte. At 46 years old, the former actor would represent generational change for the nation of 109 million.",
      url:
        "https://www.npr.org/2021/09/23/1039763220/iksomorenomanilacitymayorthephilippinesrodrigoduterte",
      urlToImage:
        "https://media.npr.org/assets/img/2021/09/22/ap21265204169276_wide39175d5898b4fb66fbafb3282961f59e0742e492.jpg?s=1400",
      publishedAt: "20210923T04:01:15Z",
      content:
        "Manila City Mayor Isko Moreno gestures after declaring his bid to run for president in a speech at a public school in the slum area near the place where he grew up in Manila, Philippines on Wednesday… [+5338 chars]"
    },
    {
      source: {
        id: null,
        name: "SB Nation"
      },
      author: "Ricky O'Donnell",
      title:
        "Why Timberwolves fired Gersson Rosas: dysfunction, affair impacted timing  SB Nation",
      description:
        "The Timberwolves fired their top boss after some shocking allegations.",
      url:
        "https://www.sbnation.com/nba/2021/9/22/22689094/timberwolvesfiredgerssonrosasallegations",
      urlToImage:
        "https://cdn.voxcdn.com/thumbor/1XIdlVHviwkIgy2U1eXHXGQnk8s=/0x0:6000x3141/fitin/1200x630/cdn.voxcdn.com/uploads/chorus_asset/file/22871524/1235303834.jpg",
      publishedAt: "20210923T03:23:52Z",
      content:
        "The Minnesota Timberwolves stunned the NBA on Wednesday by announcing the dismissal of President of Basketball Operations Gersson Rosas. Rosas had only been on the job for two seasons and never reall… [+3656 chars]"
    },
    {
      source: {
        id: null,
        name: "New York Post"
      },
      author: "Johnny Oleksinski",
      title:
        "'Many Saints of Newark' is a solid twohour episode of 'The Sopranos'  New York Post ",
      description:
        "In abandoning the tube for the big screen, “The Many Saints of Newark” had to compete with mafia classics such as “Goodfellas” and “The Godfather.” Sorry, it’s just not on that same lev…",
      url:
        "https://nypost.com/2021/09/22/manysaintsofnewarkisasolidepisodeofthesopranos/",
      urlToImage:
        "https://nypost.com/wpcontent/uploads/sites/2/2021/09/sopranosgandolfini002.jpg?quality=90&strip=all&w=1024",
      publishedAt: "20210923T03:03:00Z",
      content:
        "Woke up this morning, watched myself a film.\r\nYes, 14 years after HBOs groundbreaking drama series The Sopranos aired its final episode controversial to this day its movie prequel The Many Saints of … [+4081 chars]"
    },
    {
      source: {
        id: null,
        name: "CNET"
      },
      author: "Lisa Eadicicco",
      title:
        "Surface Duo 2 vs. Surface Duo: Everything new in Microsoft's folding phone  CNET",
      description:
        "Microsoft's new Surface Duo 2 comes with a faster processor, better cameras and other upgrades.",
      url:
        "https://www.cnet.com/tech/mobile/surfaceduo2vssurfaceduoeverythingnewmicrosoftfoldingphone/",
      urlToImage:
        "https://www.cnet.com/a/img/8e4Yp5uBWIIQKVdqrKiTpncIq5E=/1200x630/2021/09/21/0c10dc7972764044a91903b6506c4cb8/surfaceduo2textured.jpg",
      publishedAt: "20210923T02:53:03Z",
      content:
        "Microsoft\r\nMicrosoft just announced the Surface Duo 2, which comes with a slew of upgrades affecting everything from the camera to the processor and display. The phone starts at $1,499 and is availab… [+4269 chars]"
    },
    {
      source: {
        id: null,
        name: "SciTechDaily"
      },
      author: null,
      title:
        "Winged Microchip Is SmallestEver HumanMade Flying Structure – The Size of a Grain of Sand  SciTechDaily",
      description:
        "The size of a grain of sand, dispersed microfliers could monitor air pollution, airborne disease, and environmental contamination. Northwestern University engineers have added a new capability to electronic microchips: flight. About the size of a grain of san…",
      url:
        "https://scitechdaily.com/wingedmicrochipissmallesteverhumanmadeflyingstructurethesizeofagrainofsand/",
      urlToImage:
        "https://scitechdaily.com/images/MicroflierComparedtoAntscaled.jpg",
      publishedAt: "20210923T02:28:41Z",
      content:
        "A 3D microflier sits next to a common ant to show scale. Credit: Northwestern University\r\nThe size of a grain of sand, dispersed microfliers could monitor air pollution, airborne disease, and environ… [+9155 chars]"
    },
    {
      source: {
        id: "googlenews",
        name: "Google News"
      },
      author: null,
      title:
        "Toxic gas another danger from La Palma volcano  CBC News: The National",
      description: null,
      url:
        "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9alJMUWNQYXhmNjDSAQA?oc=5",
      urlToImage: null,
      publishedAt: "20210923T02:00:42Z",
      content: null
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment"
      },
      author: "Jason Owens",
      title:
        "Blue Jays plunk Kevin Kiermaier with 93 mph pitch because of their own mistake  Yahoo Sports",
      description:
        "Plunking opponents with fastballs is stupid and dangerous. Doing so because of your own mistake is next level.",
      url:
        "https://sports.yahoo.com/bluejaysplunkkevinkiermaierwith93mphfastballbecauseoftheirownmistake013838764.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/StC1GVoEMZTGsB.ZWmsYTw/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDk/https://s.yimg.com/os/creatruploadedimages/202109/e385f6501c0e11ecb5d71cf1e0dcf3d7",
      publishedAt: "20210923T01:38:00Z",
      content:
        "Plunking opponents with fastballs is stupid and dangerous. Doing so because of your own mistake is next level.\r\nTake, for example, the Toronto Blue Jays.\r\nTampa Bay Rays outfielder Kevin Kiermaier to… [+4523 chars]"
    },
    {
      source: {
        id: "usatoday",
        name: "USA Today"
      },
      author: "Erin Jensen",
      title:
        "'The Masked Singer' premiere: Not one, but two challengers are axed. See the firsts to go  USA TODAY",
      description:
        '"The Masked Singer" kicks off Season 6 by introducing five new contestants and then quickly eliminating two of them. Don\'t get attached to (spoiler)!',
      url:
        "https://www.usatoday.com/story/entertainment/tv/2021/09/22/maskedsingerpremieredoubleeliminationrecapoctopusdwighthowardmothernature/5789776001/",
      urlToImage:
        "https://www.gannettcdn.com/presto/2021/09/21/USAT/92ea2391a46e49b6a08f0b466d5d7bd1MSS6_EP601ShowGG_00433_1.jpg?crop=2023,1138,x410,y387&width=2023&height=1138&format=pjpg&auto=webp",
      publishedAt: "20210923T01:29:09Z",
      content:
        "Spoiler alert! The following contains details from the Sept. 22 premiere of Fox's \"The Masked Singer,\" including the evening's doubleelimination.\r\nFinally, a masks debate that isn't political. With … [+5759 chars]"
    }
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles
    };
  }

  render() {
    return (
      <div className="container my-4">
        <h3>TOP HEADLINES</h3>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  desc={element.description && element.description.slice(0, 50)}
                  title={element.title.slice(0, 30)}
                  imgurl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
