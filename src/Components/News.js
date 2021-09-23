import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "The Indian Express"
      },
      author: "Sports Desk",
      title:
        "IPL 2021, MI vs KKR Live Score & Updates: Rohit Sharma, QDK explode in PowerPlay  The Indian Express",
      description:
        "IPL 2021, Mumbai Indians vs Kolkata Knight Riders Live Cricket Score Updates: Mumbai Indians have won 22 times in 28 matches against Kolkata Knight Riders. They won the reverse fixture by 10 runs in April this year.",
      url:
        "https://indianexpress.com/article/sports/ipl/ipl2021mivskkrlivescoreonlinestreamingupdates7529601/",
      urlToImage: "https://images.indianexpress.com/2021/09/IPL2021match34.jpg",
      publishedAt: "20210923T14:34:33Z",
      content:
        "IPL 2021, MI vs KKR Live Cricket Score Updates: The match is being held in Abu Dhabi.IPL 2021, MI vs KKR Live Cricket Score Updates Online: Mumbai Indians (MI) will aim to bounce back from their prev… [+1157 chars]"
    },
    {
      source: {
        id: null,
        name: "NDTV News"
      },
      author: null,
      title:
        "2 Dead In Assam Protests; Man Beaten With Sticks, Shot On Camera  NDTV",
      description:
        "Two civilians were killed and nine policemen injured today when an antiencroachment drive in Assam's Darrang district blew up into a brutal clash between the police and people protesting eviction.",
      url:
        "https://www.ndtv.com/indianews/oncameraassamcopsthrashprotestersopenfireduringevictiondrive2551083",
      urlToImage:
        "https://c.ndtvimg.com/202109/5mtqsdtg_assamlandencroachmentndtv650_650x400_23_September_21.jpg",
      publishedAt: "20210923T14:23:00Z",
      content:
        "The police told NDTV that locals resisted the eviction drive and started pelting stones\r\nNew Delhi: Two civilians were killed and nine policemen injured today when an antiencroachment drive in Assam… [+2754 chars]"
    },
    {
      source: {
        id: null,
        name: "News18"
      },
      author: "News Desk",
      title:
        "Narendra Modi in US LIVE Updates: Qualcomm Prez Among Top 5 CEOs to Meet PM Modi; Talks with Predator Drone  News18",
      description:
        "Narendra Modi in US LIVE Updates: Qualcomm chief executive officer Cristiano Amon, during his interaction with Prime Minister Narendra Modi in Washington DC, expressed keenness to work with India in areas such as 5G and other 'Digital India' efforts.",
      url:
        "https://www.news18.com/news/india/narendramodiinusliveupdatesjoebidenkamalaharrisquadscottmorrisonunitednationsscheduletime4235150.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2021/09/modiadobe163240841016x9.jpg",
      publishedAt: "20210923T14:18:02Z",
      content:
        "The prime minister, who is visiting the US for the seventh time since assuming office in 2014, said that the visit is an “occasion to strengthen our strategic partnership with the US and consolidate … [+1628 chars]"
    },
    {
      source: {
        id: null,
        name: "The Indian Express"
      },
      author: "Tech Desk",
      title:
        "Surface Pro 8: Everything you need to know about Microsoft’s redesigned hybrid computer  The Indian Express",
      description:
        "Here's what's new with Microsoft's new Surface Pro 8 including specifications and features.",
      url:
        "https://indianexpress.com/article/technology/laptops/surfacepro8everythingyouneedtoknowaboutmicrosoftsredesignedhybridcomputer7530045/",
      urlToImage:
        "https://images.indianexpress.com/2021/09/MicrosoftSurfacePro81.jpg",
      publishedAt: "20210923T13:39:18Z",
      content:
        "Microsoft launched various new hardware on September 23 at its 2021 Surface Event. This included the new Surface Laptop Studio, an improved Surface Duo 2, a new mouse and more, but perhaps Microsofts… [+2113 chars]"
    },
    {
      source: {
        id: null,
        name: "NDTV News"
      },
      author: null,
      title:
        "Watch: Punjab Chief Minister's Impromptu Bhangra At College Event  NDTV",
      description:
        "New Punjab Chief Minister Charanjit Singh Channi was seen dancing at an event in Punjab's Kapurthala today. The Chief Minister, in a yellow turban and an allwhite outfit, was seen breaking into bhangra on stage, in a video tweeted by the Punjab CMO.",
      url:
        "https://www.ndtv.com/indianews/punjabchiefministersimpromptubhangraatcollegeevent2551211",
      urlToImage:
        "https://c.ndtvimg.com/202109/cst03l18_channibhangra_625x300_23_September_21.jpg",
      publishedAt: "20210923T13:10:02Z",
      content:
        "The Chief Minister, in a yellow turban and an allwhite outfit, was seen breaking into bhangra on stage\r\nNew Punjab Chief Minister Charanjit Singh Channi was seen dancing at an event in Punjab's Kapu… [+1410 chars]"
    },
    {
      source: {
        id: "thetimesofindia",
        name: "The Times of India"
      },
      author: "TIMESOFINDIA.COM",
      title:
        "My COVID story: 'My uncle could not recover from diabetic coma in the hospital'  Times of India",
      description:
        "Faza Zainab recounts her uncle's COVID experience which made the entire family pray every night. Her uncle, who had",
      url:
        "https://timesofindia.indiatimes.com/lifestyle/healthfitness/healthnews/mycovidstorymyunclecouldnotrecoverfromdiabeticcomainthehospital/articleshow/86455227.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid86455227,width1070,height580,overlaytoi_sw,pt32,y_pad40,resizemode75,imgsize27202/86455227.jpg",
      publishedAt: "20210923T12:30:00Z",
      content:
        "Faza Zainab recounts her uncle's COVID experience which made the entire family pray every night. Her uncle, who had never been admitted to a hospital before, suffered from severe outcomes, and couldn… [+5491 chars]"
    },
    {
      source: {
        id: null,
        name: "WION"
      },
      author: "WION Web Team",
      title:
        "NASA splits human spaceflight unit in two, reflecting new orbital economy  WION",
      description:
        "NASA is splitting its human spaceflight department into two separate bodies  one centered on big, futureoriented missions to the moon and Mars, the other on the International Space Station and other operations closer to Earth.",
      url:
        "https://www.wionews.com/world/nasasplitshumanspaceflightunitintworeflectingneworbitaleconomy415235",
      urlToImage:
        'https://cdn.wionews.com/sites/default/files/styles/story_page/public/2020/09/30/162472untitleddesign1.jpg, 2020" typeof="foaf:Image" />',
      publishedAt: "20210923T12:17:37Z",
      content:
        "NASA is splitting its human spaceflight department into two separate bodies  one centered on big, futureoriented missions to the moon and Mars, the other on the International Space Station and othe… [+2262 chars]"
    },
    {
      source: {
        id: null,
        name: "Moneycontrol"
      },
      author: null,
      title:
        "EU to impose universal phone charger, in blow to Apple  Moneycontrol",
      description:
        "The European Commission believes a standard cable for all devices will cut back on electronic waste, but Apple says a onesize fits all charger will stop innovation and create more pollution.",
      url:
        "https://www.moneycontrol.com/news/technology/eutoimposeuniversalphonechargerinblowtoapple7499771.html",
      urlToImage:
        "https://images.moneycontrol.com/staticmcnews/2021/09/charger770x433.png",
      publishedAt: "20210923T11:49:48Z",
      content:
        "The European Union on Thursday said it will impose a universal charger for smartphones, setting up a clash with Apple and its widely used iPhone connector cable.\r\nThe European Commission believes a s… [+2276 chars]"
    },
    {
      source: {
        id: "thetimesofindia",
        name: "The Times of India"
      },
      author: "TIMESOFINDIA.COM",
      title:
        "J&K: 3 terrorists killed in Hathlanga, huge cache of arms & ammunition recovered  Times of India",
      description:
        "India News:  The Indian Army on Thursday killed three terrorists in Rampur sector near Uri on LoC in Jammu and Kashmir's Hathlanga. They had recently crossed over",
      url:
        "https://timesofindia.indiatimes.com/india/3terroristskilledinjkshathlangahugecacheofarmsammunitionrecoveredsaysarmy/articleshow/86454105.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid86454095,width1070,height580,imgsize1048775,resizemode75,overlaytoi_sw,pt32,y_pad40/photo.jpg",
      publishedAt: "20210923T11:18:00Z",
      content:
        "J&amp;K: Indian Army eliminated 3 terrorists in Rampur sector near Uri on LoC. They had recently crossed over from Paki https://t.co/7RiiuQvpWN\r\n— ANI (@ANI) 1632395195000"
    },
    {
      source: {
        id: null,
        name: "Moneycontrol"
      },
      author: null,
      title:
        "China tells Evergrande to avoid dollar bond defaults: Report  Moneycontrol",
      description:
        "In a recent meeting with Evergrande executives, regulators said the company should communicate proactively with bondholders to avoid a default but didn't give more specific guidance, it reported, citing a person familiar with the matter.",
      url:
        "https://www.moneycontrol.com/news/business/chinatellsevergrandetoavoiddollarbonddefaultsreport7499651.html",
      urlToImage:
        "https://images.moneycontrol.com/staticmcnews/2021/08/ChinaEvergrande770x433.jpg",
      publishedAt: "20210923T11:01:01Z",
      content:
        "Chinese regulators have asked China Evergrande Group to avoid a nearterm default on its dollar bonds, Bloomberg Law reported on Thursday, the day the troubled property developer is due to make a muc… [+5942 chars]"
    },
    {
      source: {
        id: null,
        name: "Republic World"
      },
      author: "Harsh Vardhan",
      title:
        "International Space Station to house Russian movie crew by relocating Soyuz spacecraft  Republic World",
      description:
        "Astronauts aboard the International Space Station (ISS) will relocate the Soyuz MS18 spacecraft to make room for the arriving guests  a Russian film crew",
      url:
        "https://www.republicworld.com/technologynews/science/internationalspacestationtohouserussianmoviecrewbyrelocatingsoyuzspacecraft.html",
      urlToImage:
        "https://img.republicworld.com/republicprod/stories/promolarge/xhdpi/elxgb4clbgctzeat_1632394049.jpeg",
      publishedAt: "20210923T11:00:00Z",
      content:
        "Astronauts aboard the International Space Station (ISS) will relocate the Soyuz MS18 spacecraft to make room for the arriving guests, adding to the excitement of the Russian movie crew, The arriving… [+2005 chars]"
    },
    {
      source: {
        id: null,
        name: "Jagran Josh"
      },
      author: null,
      title:
        "NASA: Hubble telescope discovers 6 massive dead galaxies; Check details  Jagran Josh",
      description:
        "Hubble telescope has discovered the six massive galaxies that ran out of cold hydrogen gas while most of the other galaxies were producing new stars",
      url:
        "https://www.jagranjosh.com/currentaffairs/nasahubbletelescopediscovers6massivedeadgalaxiescheckdetails16323947831",
      urlToImage:
        "https://img.jagranjosh.com/images/2021/September/2392021/Dead_galaxies.jpg",
      publishedAt: "20210923T10:56:00Z",
      content:
        "The Hubble telescope of the National Aeronautics Space Administration (NASA) has discovered massive dead galaxies that had run out of cold hydrogen gas which is needed to make stars.\r\nIn a tweet, the… [+3040 chars]"
    },
    {
      source: {
        id: null,
        name: "Devdiscourse"
      },
      author: "PTI",
      title:
        "Vaccinated pregnant women pass high level of antibodies to babies: Study  Devdiscourse",
      description:
        "It is consistent with what we see with other immunizations, Lighter said.Our findings add to a growing list of important reasons why women should be advised to receive the COVID19 vaccine during pregnancy for the added benefit of their newborn receiving cruc…",
      url:
        "https://www.devdiscourse.com/article/health/1741290vaccinatedpregnantwomenpasshighlevelofantibodiestobabiesstudy",
      urlToImage:
        "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/16_03_2020_13_52_10_2451139.jpg?width=920&format=jpeg",
      publishedAt: "20210923T10:41:00Z",
      content:
        "Women who receive the mRNA COVID19 vaccine during pregnancy pass high levels of antibodies to their babies, according to a study.\r\nThe effectiveness of COVID19 vaccines lies in their ability to tri… [+3725 chars]"
    },
    {
      source: {
        id: null,
        name: "NDTV News"
      },
      author: "Jagmeet Singh",
      title:
        "Poco C Series Launch in India Teased for September 30, Poco C4 Speculated  Gadgets 360",
      description:
        "Poco C series is India is teased to get a new model on September 30. The Xiaomi spinoff brand released a teaser image on Thursday that revealed the launch plans. The phone is speculated to be the Poco C4 — the successor to the Poco C3.",
      url:
        "https://gadgets.ndtv.com/mobiles/news/pococseriesc4launchdateindiaseptember30c3pricespecificationsteaser2550980",
      urlToImage:
        "https://i.gadgets360cdn.com/large/poco_c_series_india_launch_teaser_twitter_1632392895617.jpg",
      publishedAt: "20210923T10:38:05Z",
      content:
        "Poco C series in India is expected to add a new model on September 30 as the brand released a teaser image on social media on Thursday. Although details about the new model are yet to be revealed, it… [+2079 chars]"
    },
    {
      source: {
        id: "thetimesofindia",
        name: "The Times of India"
      },
      author: "TIMESOFINDIA.COM",
      title:
        "sensex today: Sensex, Nifty scale fresh closing highs: Top reasons behind the surge  Times of India",
      description:
        "Markets News: Equity indices scaled to record highs on Thursday with the benchmark BSE sensex rising over 950 points led by gains in realty and banking stocks. Afte",
      url:
        "https://timesofindia.indiatimes.com/business/markets/sensex/sensexniftyscalefreshclosinghighstopreasonsbehindthesurge/articleshow/86452760.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid86453061,width1070,height580,imgsize86304,resizemode75,overlaytoi_sw,pt32,y_pad40/photo.jpg",
      publishedAt: "20210923T10:28:00Z",
      content:
        "Sensex, Nifty scale fresh closing highs: Top reasons behind the surge"
    },
    {
      source: {
        id: "thetimesofindia",
        name: "The Times of India"
      },
      author: "TIMESOFINDIA.COM",
      title:
        "SC praises Centre's stand on Rs 50k exgratia assistance for kin of Covid victims  Times of India",
      description:
        "India News: NEW DELHI: The Supreme Court on Thursday appreciated the Centre's step to grant exgratia assistance to the kin of those who who lost their lives due .",
      url:
        "https://timesofindia.indiatimes.com/india/scpraisescentreshandlingpandemicverdictonoct4overrs50kexgratiatokinofcovidvictims/articleshow/86452379.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid86453371,width1070,height580,imgsize42500,resizemode75,overlaytoi_sw,pt32,y_pad40/photo.jpg",
      publishedAt: "20210923T10:13:00Z",
      content:
        "SC praises Centre's stand on Rs 50k exgratia assistance for kin of Covid victims\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>SC praises Centre's stand on Rs 50k exgratia assistance for kin of Covi… [+18 chars]"
    },
    {
      source: {
        id: "aljazeeraenglish",
        name: "Al Jazeera English"
      },
      author: "Ali M Latifi",
      title: "How deep are divisions among the Taliban?  Al Jazeera English",
      description:
        "Sources tell Al Jazeera the discord is very real and if disharmony grows, it will spell trouble for the Afghan people.",
      url:
        "https://www.aljazeera.com/news/2021/9/23/howdeeparedivisionsamongthetaliban",
      urlToImage:
        "https://www.aljazeera.com/wpcontent/uploads/2021/09/20210915T010232Z_1861006166_RC21QP9ROZAH_RTRMADP_3_AFGHANISTANCONFLICTONEMONTHEVENTS.jpg?resize=1200%2C630",
      publishedAt: "20210923T10:00:25Z",
      content:
        "There have been reports of divisions among the Taliban leadership, raising questions about the unity within the group which took over the country last month.\r\nThe publics doubts about the groups unit… [+8006 chars]"
    },
    {
      source: {
        id: null,
        name: "Moneycontrol"
      },
      author: null,
      title:
        "64,000 jobs lost as five major auto companies exit India: FADA  Moneycontrol.com",
      description:
        "After trying fruitlessly for several years, Ford called it quits on September 9, 2021, bringing curtains on all manufacturing and sales operations in the country in a phased manner.",
      url:
        "https://www.moneycontrol.com/news/technology/auto/exitoffivemajorautocompaniesfromindiaresultin64000joblossesrs2485croreinvestmentloss7499151.html",
      urlToImage:
        "https://images.moneycontrol.com/staticmcnews/2020/04/Ford770x433.jpg",
      publishedAt: "20210923T09:56:32Z",
      content:
        "Exits by automotive companies from India over the last five years have resulted in 64,000 layoffs and a dealer investment loss of Rs 2,485 crore, data shared by the Federation of Automobile Dealer As… [+3869 chars]"
    },
    {
      source: {
        id: null,
        name: "India TV News"
      },
      author: "IANS",
      title:
        "Advisable to get screened every six months after Covid recovery  India TV News",
      description:
        "We tend to ignore some of the warning signs and due to lack of awareness, sometimes, we fail to prevent certain cardiovascular issues during COVID or even after recovering from COVID.",
      url:
        "https://www.indiatvnews.com/health/advisabletogetscreenedeverysixmonthsaftercovidrecovery735977",
      urlToImage:
        "https://resize.indiatvnews.com/en/resize/newbucket/715_/2021/09/covid191632390511.jpg",
      publishedAt: "20210923T09:49:13Z",
      content:
        "COVID19 has led to complications and health risks manifold for patients with noncommunicable diseases. Almost 7580 percent of the COVID patients don't require hospitalisation and can recover at ho… [+3557 chars]"
    },
    {
      source: {
        id: null,
        name: "Asianetnews.com"
      },
      author: "Team Newsable",
      title:
        "'Biggest, longestlasting marsquakes': NASA's InSight records 4.2 magnitude quake on Mars  Asianet Newsable ",
      description:
        "The NASA probe has recorded the most significant and longestlasting quake on Mars, reaching magnitude 4.2 and causing to shake for over an hour and a half.",
      url:
        "https://newsable.asianetnews.com/science/biggestlongestlastingmarsquakesnasasinsightrecords42magnitudequakeonmarsgcwqzvseh",
      urlToImage:
        "https://staticai.asianetnews.com/images/01fg90jj94nv5tz523f61pcz9k/snip202109231png_1200x630xt.jpg",
      publishedAt: "20210923T09:44:41Z",
      content:
        "The NASA probe has recorded the most significant and longestlasting quake on Mars, reaching magnitude 4.2 and causing to shake for over an hour and a half. The InSight lander, which has its ears att… [+2045 chars]"
    }
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles
    };
  }
  /* 
async  componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=3ce7ec3696e547e49c3a09d845e3b82f"
 let data=await fetch(url);
 let parsedData= await data.json();
 this.setState({articles:parsedData.articles})
console.log(parsedData);
 
  }
*/

  render() {
    return (
      <div className="container my-4">
        <h3>TOP HEADLINES</h3>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3 " key={element.url}>
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
