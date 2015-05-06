import React from "react";
import { Link } from "react-router";

import Legislator from "../Legislator/Legislator.jsx";
import LegislatorAvatar from "../LegislatorAvatar/LegislatorAvatar.jsx";
import Icon from "../Icon/Icon.jsx";

import "./Records.css";
export default class Records extends React.Component {
  constructor(props) { super(props)
      this.state = { 
        shouldYearExpand:{},
        currentTab: 'vote'
      }
  }

  _onSetTab(i, event){
    this.setState({
        currentTab: i
    });

  }

  _onTogggleYearData(i, event){
    console.log(i);
    var currentYearExpand = this.state.shouldYearExpand;
    
    if(!currentYearExpand[i])
        currentYearExpand[i] = true;
    else
        currentYearExpand[i] = !currentYearExpand;

    this.setState({
        currentYearExpand: currentYearExpand
    });
  }

  render() {
   
    var {shouldYearExpand, currentTab} = this.state;
    var classSet = React.addons.classSet;
    
    var entriesCount = {};
        entriesCount.all = 0;
        entriesCount.yearAll = 0;
        entriesCount.for = 0;
        entriesCount.against = 0;
        entriesCount.unclear = 0;


    //console.log(data);
    //每一年

    var data = 
      [
          {
              "year": "2012",
              "entries": [
                  {
                      "name": "黃昭順",
                      "id": "1",
                      "date": "2012-05-11",
                      "year": "2012",
                      "month": "05",
                      "day": "11",
                      "type": "院會書面質詢",
                      "quote": "本院黃委員昭順，針對近日同性婚姻合法化爭議，認為人生而平等，同性婚姻權益等同於異性之婚姻權，應與其享婚姻中相同的權利與義務，亦應受憲法婚姻自由之保障，對於同性婚姻也應採取理解並尊重之態度，儘速修正相關法令，以期落實平等原則，特向行政院提出質詢。",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/32/LCIDC01_1013201.pdf",
                      "trustVote": "12"
                  },
                  {
                      "name": "蕭美琴",
                      "id": "2",
                      "date": "2012-11-09",
                      "year": "2012",
                      "month": "11",
                      "day": "09",
                      "type": "院會質詢",
                      "quote": "美國剛進行總統大選，期間也針對很多公共議題進行公民投票，其中有三個州同意通過同性婚姻，請問院長，對於同性伴侶、同性婚姻、不同性傾向的權益問題，你有何立場？",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/68/LCIDC01_1016801.pdf",
                      "trustVote": "3"
                  },
                  {
                      "name": "吳育仁",
                      "id": "3",
                      "date": "2012-12-03",
                      "year": "2012",
                      "month": "12",
                      "day": "03",
                      "type": "委員會質詢",
                      "quote": "如果親屬法或民法上同意同性婚姻或同志伴侶權時，你是否支持他們享有勞動基本權？也就是有關家庭的部分，譬如留職育嬰停薪與陪產假？",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/83/LCIDC01_1018303.pdf",
                      "trustVote": "2"
                  },
                  {
                      "name": "尤美女",
                      "id": "4",
                      "date": "2012-12-26",
                      "year": "2012",
                      "month": "12",
                      "day": "26",
                      "type": "公聽會",
                      "quote": "舉行「同性婚姻合法化及伴侶權益法制化」公聽會",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/03/LCIDC01_1020304.pdf",
                      "trustVote": "1"
                  }
              ]
          },
          {
              "year": "2013",
              "entries": [
                  {
                      "name": "蕭美琴",
                      "id": "5",
                      "date": "2013-01-07",
                      "year": "2013",
                      "month": "01",
                      "day": "07",
                      "type": "委員會質詢",
                      "quote": "其實，在亞洲其他國家中，尤其是一些講華語的國家，台灣算是相對自由與開放的國家，當然，越是自由與開放的國家，其文化與創意也更能蓬勃發展，樣態上也更趨多元，這也是台灣的優勢，像本席就主張同性婚姻可以合法化，因為我覺得台灣社會若能包容不同性傾向的人，就表示我們是一個越前衛、越進步的國家，在這樣的國家裡面文化創意的空間自然就更大，這也表示我們的社會可以包容更多不同意見，換言之，這裡是讓更多元意見存在的地方！",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/06/LCIDC01_1020601.pdf",
                      "trustVote": "0"
                  },
                  {
                      "name": "孔文吉",
                      "id": "6",
                      "date": "2013-10-24",
                      "year": "2013",
                      "month": "10",
                      "day": "24",
                      "type": "委員會質詢",
                      "quote": "本席希望你們能夠仔細審酌這件事情，本席是反對的，因為我是基督徒，幸好尤美女委員的提案，本席沒有連署，連署欄沒有本席的名字，我必須在此表示反對，不然很多宗教團體都會來找我。現在有些學校會請同志團體到學校去分享他們的心得，本席希望法務部能站在中性的立場，多聽取各方的意見，教會團體對於同性戀結婚還是無法容許、無法同意的。",
                      "opinion": "反對",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/63/LCIDC01_1026301.pdf",
                      "trustVote": "43"
                  },
                  {
                      "name": "羅淑蕾",
                      "id": "7",
                      "date": "2013-11-01",
                      "year": "2013",
                      "month": "11",
                      "day": "01",
                      "type": "院會書面質詢",
                      "quote": "本院羅委員淑蕾，鑑於近期少數團體基於「同性婚姻」、「伴侶制度」、「多人家屬及收養制度」之三大訴求，執意推動「多元成家法案」，將會為台灣帶來家庭的不穩定性及耗費大量社會成本，兒童的權益得不到保障，衍生更多社會問題，感到憂心。爰此，衡平台灣整體社會發展及少數特殊家庭需求，相關主管機關應在維護法制穩定性的前提下，建立起個案考量及處理之機制，特向行政院提出質詢。",
                      "opinion": "反對",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/61/LCIDC01_1026101.pdf",
                      "trustVote": "100"
                  },
                  {
                      "name": "丁守中",
                      "id": "8",
                      "date": "2013-11-08",
                      "year": "2013",
                      "month": "11",
                      "day": "08",
                      "type": "院會質詢",
                      "quote": "我完全同意同性戀者有相愛、同居也有財產自由處分的完全自主權利，但我更支持宗教團體，因為我是國際佛光會的副總會長。我認為對於宗教團體與一般人的傳統認知，也就是對家庭、對夫妻倫理與價值不應該改變。",
                      "opinion": "反對",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/65/LCIDC01_1026501.pdf",
                      "trustVote": "332"
                  },
                  {
                      "name": "陳其邁",
                      "id": "9",
                      "date": "2013-11-20",
                      "year": "2013",
                      "month": "11",
                      "day": "20",
                      "type": "預算凍結案",
                      "quote": "內政部103年度單位預算第3目「戶政業務」分支計畫「01督導改進戶籍行政」編列業務費219萬2千元。惟今年6月內政部發函予一對已登記結婚之吳姓跨性別伴侶，要求其自行辦理撤銷婚姻，又於今年8月7日內政部專案會議，認定吳姓伴侶婚姻有效，內政部態度反覆，標準不一，侵害民眾權益，造成不必要之精神傷害，顯見內政部缺乏性別友善意識。爰此，提案凍結前開預算1/2，計109萬6千元，俟內政部提出「如何推行我國同性婚姻合法化」之專案報告，向本院內政委員會報告並經同意後，始得動支。",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/75/LCIDC01_1027501.pdf",
                      "trustVote": "1"
                  },
                  {
                      "name": "吳育仁",
                      "id": "10",
                      "date": "2013-11-25",
                      "year": "2013",
                      "month": "11",
                      "day": "25",
                      "type": "委員會質詢",
                      "quote": "請問羅總經理，同性婚姻合法化之後，勞工保險條例中的老人給付中會產生什麼樣的改變？",
                      "opinion": "不明確",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/77/LCIDC01_1027702.pdf",
                      "trustVote": "343"
                  },
                  {
                      "name": "陳其邁",
                      "id": "11",
                      "date": "2013-11-27",
                      "year": "2013",
                      "month": "11",
                      "day": "27",
                      "type": "預算凍結案",
                      "quote": "內政部103年度單位預算第3目「戶政業務」分支計畫「01督導改進戶籍行政」編列業務費219萬2,000元。惟今年6月內政部發函予一對已登記結婚之吳姓跨性別伴侶，要求其自行辦理撤銷婚姻，又於今年8月7日內政部專案會議，認定吳姓伴侶婚姻有效，內政部態度反覆，標準不一，侵害民眾權益，造成不必要之精神傷害，顯見內政部缺乏性別友善意識。爰此，提案凍結預算，俟內政部提出「如何推行我國同性婚姻合法化」之專案報告，向立法院內政委員會報告並經同意後，始得動支。",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/79/LCIDC01_1027901.pdf",
                      "trustVote": "12"
                  },
                  {
                      "name": "許忠信",
                      "id": "12",
                      "date": "2013-12-16",
                      "year": "2013",
                      "month": "12",
                      "day": "16",
                      "type": "委員會質詢",
                      "quote": "社會上有許多同性戀的同志，我們非常尊重他們的權益，他們該受到的尊重，本席都非常尊重。現今有所謂的多元成家方案，在多元成家方案中兩位同性別的人不可能自然生育，勢必要倚賴人工生殖，問題在於兩位女性共組家庭，能不能兩位女性都接受人工生殖，在兩位女性中誰可以接受人工授孕？如果兩位同性的男性共組家庭，在兩位男性中誰能找代理孕母？請部長針對此一問題向媒體做答復。",
                      "opinion": "不明確",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/03/LCIDC01_1030302.pdf",
                      "trustVote": "32"
                  },
                  {
                      "name": "段宜康",
                      "id": "13",
                      "date": "2013-12-25",
                      "year": "2013",
                      "month": "12",
                      "day": "25",
                      "type": "委員會質詢",
                      "quote": "這樣問你好了，你覺得該不該往這個方向去努力？這樣比較有階段性，要往一個方向去努力跟現在馬上要落實是不同的，所以我這樣問你好了，你覺得我們的政府或性別平等業務該不該將此列為重要推動項目？",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/07/LCIDC01_1030702.pdf",
                      "trustVote": "123"
                  },
                  {
                      "name": "姚文智",
                      "id": "14",
                      "date": "2013-12-25",
                      "year": "2013",
                      "month": "12",
                      "day": "25",
                      "type": "委員會質詢",
                      "quote": "大家一直在反同性戀，在冬季奧運時，美國就請一個同性戀當團長到俄羅斯去，這不要花錢呀！這是一個用不同的事件去累積、激盪而推動性別平等的作法，你們也可以做呀！國內也有同志的遊行或是其他活動，你們也可以有些創意，不用花錢呀！但是現在不太看得到你們的角色。",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/07/LCIDC01_1030702.pdf",
                      "trustVote": "3"
                  }
              ]
          },
          {
              "year": "2014",
              "entries": [
                  {
                      "name": "邱志偉",
                      "id": "15",
                      "date": "2014-03-31",
                      "year": "2014",
                      "month": "03",
                      "day": "31",
                      "type": "委員會質詢",
                      "quote": "如果他（軍事院校的學生）今天參與其他的議題，例如我們支持同性婚姻或是多元成家的方案，如果他去參加，你們會禁止嗎？",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/21/LCIDC01_1032101.pdf",
                      "trustVote": "74"
                  },
                  {
                      "name": "蕭美琴",
                      "id": "16",
                      "date": "2014-10-16",
                      "year": "2014",
                      "month": "10",
                      "day": "16",
                      "type": "委員會質詢",
                      "quote": "有一些國家承認同性婚姻的合法性，如果今天在台灣的一些外交官有同性的配偶或伴侶，那外交部是否承認他們的婚姻關係？總是會涉及簽證以及居留權的問題，我們的態度為何？",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/67/LCIDC01_1036701.pdf",
                      "trustVote": "54"
                  },
                  {
                      "name": "尤美女",
                      "id": "17",
                      "date": "2014-10-16",
                      "year": "2014",
                      "month": "10",
                      "day": "16",
                      "type": "公聽會",
                      "quote": "舉行「用平等的心把每一個人擁入憲法的懷抱─同性婚姻及同志收養議題」公聽會",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/64/LCIDC01_1036401.pdf",
                      "trustVote": "23"
                  },
                  {
                      "name": "陳其邁",
                      "id": "18",
                      "date": "2014-11-12",
                      "year": "2014",
                      "month": "11",
                      "day": "12",
                      "type": "預算主決議",
                      "quote": "查行政院100年函頒之「性別平等政策綱領」乃由行政院性別平等處主政，規劃我國性別平等施政藍圖。然查「性別平等政策綱領」內容偏重婦女政策，多元性別、同志權益等政策尚不完備，實有不盡完善之處。且查103年6月「消除對婦女一切形式歧視公約（CEDAW）中華民國（臺灣）第2次國家報告國外專家審查暨發表會議」中，國外專家建議政府應將多元性別內涵納入性別平等教育教材中，並建議政府就國內社會關注的多元家庭法制保障及福利取得議題評估與制定相關政策。又查近年台灣同志及多元性別權益諸多倡議活動皆將「多元性別」、「婚姻平權、平等成家」、「擁抱性/別認同差異」主題納入，國際知名之紐約時報亦於103年10月報導台灣社會追求同志平權運動，形容台灣已具有亞洲同性戀者的「燈塔」地位。爰此，為求政府之性別平等政策不致落後社會脈動及趨勢之外，行政院性別平等處身為「性別平等政策綱領」主政機關，應就同志權益、多元性別、婚姻平權等議題進行研擬，將上述層面之議題修正納入「性別平等政策綱領」政策內容。",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/80/LCIDC01_1038001.pdf",
                      "trustVote": "54"
                  },
                  {
                      "name": "吳宜臻",
                      "id": "19",
                      "date": "2014-12-11",
                      "year": "2014",
                      "month": "12",
                      "day": "11",
                      "type": "委員會質詢",
                      "quote": "抱歉！因為本席在10月及11月請假，所以未出席委員會會議，現在請教次長，對包含同性婚姻的婚姻平權法案，法務部到底提出了嗎？",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/01/LCIDC01_1040101.pdf",
                      "trustVote": "23"
                  },
                  {
                      "name": "尤美女",
                      "id": "20",
                      "date": "2014-12-18",
                      "year": "2014",
                      "month": "12",
                      "day": "18",
                      "type": "委員會質詢",
                      "quote": "其次，我們看到很多國家都承認同性婚姻，他們甚至於可以去登記，如果他們在國外已經是合法登記的同性婚姻，今天他們到國內來，他們可不可以拿國外合法登記的結婚證書到國內來登記結婚？",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/01/LCIDC01_1040101.pdf",
                      "trustVote": "862"
                  },
                  {
                      "name": "廖正井",
                      "id": "21",
                      "date": "2014-12-22",
                      "year": "2014",
                      "month": "12",
                      "day": "22",
                      "type": "委員會質詢",
                      "quote": "我贊成你的看法，我們客家人有家族族譜，像我們就常常談起自己是來台第幾代，相關族譜也都會留傳下來，如果照這樣發展，可能就會失去家庭倫理，家庭關係也不復存在，是不是？",
                      "opinion": "反對",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
                      "trustVote": "4"
                  },
                  {
                      "name": "李貴敏",
                      "id": "22",
                      "date": "2014-12-22",
                      "year": "2014",
                      "month": "12",
                      "day": "22",
                      "type": "委員會質詢",
                      "quote": "我們去看看別的國家如何解決這個問題，我剛才特別提到，我到國外蒐集資料，美國的解決方式是在全民尚未達成共識時讓彼此的對立降到最低，可能是透過法院判決或其他方式，而不是在共識尚未達成時硬要撕裂人民之間的情感。",
                      "opinion": "反對",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
                      "trustVote": "52"
                  },
                  {
                      "name": "段宜康",
                      "id": "23",
                      "date": "2014-12-22",
                      "year": "2014",
                      "month": "12",
                      "day": "22",
                      "type": "委員會質詢",
                      "quote": "因為擔心國家的人口政策而不贊成少數人同性婚姻，照這個邏輯，在一男一女結婚之前就要統統檢查有沒有生育能力，沒有生育能力的就沒有資格結婚，否則將影響國家人口政策，現在出生率已經這麼低了，怎麼可以容許沒有生育能力的人結婚？即便是一男一女結婚，在結婚之前都要證明可以生育，你的邏輯是這樣嗎？",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
                      "trustVote": "45"
                  },
                  {
                      "name": "尤美女",
                      "id": "24",
                      "date": "2014-12-22",
                      "year": "2014",
                      "month": "12",
                      "day": "22",
                      "type": "委員會質詢",
                      "quote": "你覺得人權是要用所謂的共識才能決定？剛剛段委員講得很好，法律是要保障少數人的權益，但今天對於這些少數人的權益，卻要經過多數人的同意，但那些多數人根本不承認這些少數人的存在啊！所以多數人不同意，因此這些少數人的權益就不受到保障，是這樣子嗎？",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
                      "trustVote": "23"
                  },
                  {
                      "name": "呂學樟",
                      "id": "25",
                      "date": "2014-12-22",
                      "year": "2014",
                      "month": "12",
                      "day": "22",
                      "type": "委員會質詢",
                      "quote": "我反對的是為同性戀婚姻過當修法，因為這樣的修法會造成千百年來家庭倫常的淪喪，社會的價值觀也會崩潰。",
                      "opinion": "反對",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
                      "trustVote": "54"
                  },
                  {
                      "name": "鄭麗君",
                      "id": "26",
                      "date": "2014-12-22",
                      "year": "2014",
                      "month": "12",
                      "day": "22",
                      "type": "委員會質詢",
                      "quote": "今天如果你們繼續要主張這條法律必須基於所謂的傳統、人倫與國情，就是一種社會的歧視，而此背後是這個法律制度性歧視的結構，所以，為什麼我們主張要修民法，因為如果前面所說的制度性歧視結構不打破，社會歧視依然可以這麼大聲地繼續污名，而且竟然是由立法委員在這裡說出來，讓我們覺得實在不可思議！",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
                      "trustVote": "542"
                  },
                  {
                      "name": "林淑芬",
                      "id": "27",
                      "date": "2014-12-22",
                      "year": "2014",
                      "month": "12",
                      "day": "22",
                      "type": "委員會質詢",
                      "quote": "你這種說法根本是助長歧視，完全是一種假裝式的漸進及演進，基本上，你們認為同志的人權應該要保障，但現在不能給，然後結果就是剝奪同志的基本人權，我告訴你，你這是助長歧視，假裝演進，假裝漸進。你們認為基本上是應該要，但是現在不能，結果就是剝奪他們的基本人權嘛！",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
                      "trustVote": "5"
                  },
                  {
                      "name": "林鴻池",
                      "id": "28",
                      "date": "2014-12-22",
                      "year": "2014",
                      "month": "12",
                      "day": "22",
                      "type": "委員會質詢",
                      "quote": "今天要討論的民法親屬編部分條文修正案中針對去性別化，希望透過去性別化，修改民法親屬編，讓同性戀可以結婚。有的人認為這其實是基本人權，他們兩個要結婚並沒有礙著別人，不過，這是一個婚姻制度，也是一個家庭制度，我們幾千年來的家庭制度、倫理在一夕之間要透過民法親屬編改變它，我們也可以很快就讓它出委員會，送院會三讀通過，改文字很簡單，但我們需要考量的是，幾千年來的這個家庭制度、倫理的變化對社會產生的衝擊是什麼？",
                      "opinion": "反對",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
                      "trustVote": "2"
                  }
              ]
          },
          {
              "year": "2015",
              "entries": [
                  {
                      "name": "尤美女",
                      "id": "29",
                      "date": "2015-01-05",
                      "year": "2015",
                      "month": "01",
                      "day": "05",
                      "type": "委員會質詢",
                      "quote": "今日報紙刊載一則「原民部落喜辦同志家庭收養」的新聞，前陣子本委員會方才審查「婚姻平權法草案」，當時法務部認為「婚姻平權法草案」若通過，社會對立將會太高，也會有許多的負面輿論，因而不讓同志婚姻平權及收養孩童；但是，我們看到原住民部落有兩位女同志，他們一起生活近30年，並收養其中一位女同志哥哥的小孩，三人共同生活了12年，他們一直把她當親生女兒般照顧，所以部落特別認可這對同志家庭收養這名小孩，他們明知依照漢人的法律，組成同志家庭不具有法律效力，但是他們認為即使沒有被法律認可，仍可以實踐非常重要的家庭功能，所以他們的收養儀式獲得長老們的首肯，由頭目遵循傳統將祖傳禮刀、大鐵鍋、琉璃珠、現金等貴重禮品贈與被收養者生父的家族，完成收養儀式。既然部落做得到，我們漢族是不是也能夠拋下傲慢的心態，重新認識另外一個與我們不一樣的同志家族？請法務部與司法院能夠多加考量。好不好？",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/08/LCIDC01_1040801.pdf",
                      "trustVote": "65"
                  },
                  {
                      "name": "陳其邁",
                      "id": "30",
                      "date": "2015-01-12",
                      "year": "2015",
                      "month": "01",
                      "day": "12",
                      "type": "委員會質詢",
                      "quote": "所以我說尊重部落會議的決定啊！這是原住民族自治，所以包括對同性婚姻的看法，我們也應該尊重部落，你剛剛的口頭宣示很好、很進步啊！我給你鼓勵啊！所以我的意思是，我們進一步在原住民族基本法裡頭，就把同性婚姻這個部分列入，明定我們尊重部落所做的決定，尊重原住民自治，人家魯凱族贊成，或是有其他族群贊成，我們應該要尊重他們啊！我也同意啊！",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
                      "trustVote": "75"
                  },
                  {
                      "name": "尤美女",
                      "id": "31",
                      "date": "2015-03-12",
                      "year": "2015",
                      "month": "03",
                      "day": "12",
                      "type": "委員會質詢",
                      "quote": "法務部在2001年呈報行政院的人權保障基本法草案第二十四條，即已明白規定國家應尊重同性戀者之權益，同性男女得依法組成家庭及收養子女。當時即已定調要保障同志的婚姻，馬政府上台之後，卻整個推翻，現在又要從頭來過嗎？事實上你們早已委託戴教授去對同志的權益作研究，厚厚的一本報告在法務部裡面都躺多久了，你們還要重啟爐灶，從頭再來？",
                      "opinion": "贊成",
                      "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/16/LCIDC01_1041601.pdf",
                      "trustVote": "2"
                  }
              ]
          }
      ]

    var year_entries = data.map((year, year_index)=>{
        entriesCount.yearAll = 0;
        var entries = year.entries
        .filter((item)=>{
            var shouldReturn = true;
            if(item.name !== '尤美女'){
              shouldReturn = false;
            }
            //console.log(item.name+": "+shouldReturn);
            if(shouldReturn){
              return item;

            }
                
          }
        )
        .map((item,key)=>{

            entriesCount.all++;
            entriesCount.yearAll++;
            
            //每一筆 entry
            switch(item.opinion){
              case '贊成':
                  entriesCount.for++;
                  break;
              case '反對':
                  entriesCount.against++;
                  break;
              case '不明確':
                  entriesCount.unclear++;
                  break;

            }
            
           
            var link = item.link;
            var opinionClasses = classSet({
              "Records-opinion": true,
              "is-for": item.opinion === '贊成',
              "is-against": item.opinion === '反對',
              "is-unclear": item.opinion === '不明確'
            });
            
            return (
                <div className="Records-entry"
                     key={key}>
                    <div className="Records-entryTitle">
                      <LegislatorAvatar data={item.name} name={true}/>
                      <div className={opinionClasses}>{item.opinion}</div>
                    </div>
                    <div className="Records-quote">
                       {item.quote}
                    </div>
                    <div className="Records-info">
                        －{item.type}，{item.date}
                    </div>
                    <div className="Records-action">
                      <div className="Records-actionItem">
                        <span className="Records-star"><Icon icon={"star"}/> {item.trustVote}</span>  
                      </div>
                      <div className="Records-actionItem">
                        <span className="Records-more"><Icon icon={"share"}/> 124</span>
                      </div>
                      <div className="Records-actionItem">
                        <span className="Records-more"><Icon icon={"ellipsis-h"}/></span>
                      </div>
                      
                    </div>
                    
                </div>
            )
        });
        
        var boundToggleYear = this._onTogggleYearData.bind(this, year.year);


        
        var voteEntries = (shouldYearExpand[year.year]===true)? 
        <div>
          {entries}
        </div> : "";
        var toggleText = (shouldYearExpand[year.year]===true)? "折疊" : "展開";
        if(entriesCount.yearAll === 0)
          toggleText = "";
        
       return (

            <div className="Records-year"
                 key={year_index}>
                <div className="Records-yearHeader"
                     onClick={boundToggleYear}>
                   <div className="Records-yearUnit"></div>
                   <div className="Records-yearTitle">{year.year}</div>
                   <div className="Records-yearSum">
                        <span className="Records-voteNumbers">{entriesCount.yearAll}</span> 個相關表態
                        <div className="Records-yearToggle">{toggleText}</div>
                   </div>
                </div>
                <div className="Records-yearEntries">
                    {voteEntries}
                </div>
            </div>
       );



    });


    /////////////////////////////////////////////////////////
    /* 依照票數排序 */
    ////////////////////////////////////////////////////////

    
    var orderByVote = 
    [
        {
            "name": "尤美女",
            "id": "20",
            "date": "2014-12-18",
            "year": "2014",
            "month": "12",
            "day": "18",
            "type": "委員會質詢",
            "quote": "其次，我們看到很多國家都承認同性婚姻，他們甚至於可以去登記，如果他們在國外已經是合法登記的同性婚姻，今天他們到國內來，他們可不可以拿國外合法登記的結婚證書到國內來登記結婚？",
            "opinion": "贊成",
            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/01/LCIDC01_1040101.pdf",
            "trustVote": "862"
        },
        {
            "name": "尤美女",
            "id": "29",
            "date": "2015-01-05",
            "year": "2015",
            "month": "01",
            "day": "05",
            "type": "委員會質詢",
            "quote": "今日報紙刊載一則「原民部落喜辦同志家庭收養」的新聞，前陣子本委員會方才審查「婚姻平權法草案」，當時法務部認為「婚姻平權法草案」若通過，社會對立將會太高，也會有許多的負面輿論，因而不讓同志婚姻平權及收養孩童；但是，我們看到原住民部落有兩位女同志，他們一起生活近30年，並收養其中一位女同志哥哥的小孩，三人共同生活了12年，他們一直把她當親生女兒般照顧，所以部落特別認可這對同志家庭收養這名小孩，他們明知依照漢人的法律，組成同志家庭不具有法律效力，但是他們認為即使沒有被法律認可，仍可以實踐非常重要的家庭功能，所以他們的收養儀式獲得長老們的首肯，由頭目遵循傳統將祖傳禮刀、大鐵鍋、琉璃珠、現金等貴重禮品贈與被收養者生父的家族，完成收養儀式。既然部落做得到，我們漢族是不是也能夠拋下傲慢的心態，重新認識另外一個與我們不一樣的同志家族？請法務部與司法院能夠多加考量。好不好？",
            "opinion": "贊成",
            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/08/LCIDC01_1040801.pdf",
            "trustVote": "65"
        },
        {
            "name": "尤美女",
            "id": "17",
            "date": "2014-10-16",
            "year": "2014",
            "month": "10",
            "day": "16",
            "type": "公聽會",
            "quote": "舉行「用平等的心把每一個人擁入憲法的懷抱─同性婚姻及同志收養議題」公聽會",
            "opinion": "贊成",
            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/64/LCIDC01_1036401.pdf",
            "trustVote": "23"
        },
        {
            "name": "尤美女",
            "id": "24",
            "date": "2014-12-22",
            "year": "2014",
            "month": "12",
            "day": "22",
            "type": "委員會質詢",
            "quote": "你覺得人權是要用所謂的共識才能決定？剛剛段委員講得很好，法律是要保障少數人的權益，但今天對於這些少數人的權益，卻要經過多數人的同意，但那些多數人根本不承認這些少數人的存在啊！所以多數人不同意，因此這些少數人的權益就不受到保障，是這樣子嗎？",
            "opinion": "贊成",
            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
            "trustVote": "23"
        },
        {
            "name": "尤美女",
            "id": "31",
            "date": "2015-03-12",
            "year": "2015",
            "month": "03",
            "day": "12",
            "type": "委員會質詢",
            "quote": "法務部在2001年呈報行政院的人權保障基本法草案第二十四條，即已明白規定國家應尊重同性戀者之權益，同性男女得依法組成家庭及收養子女。當時即已定調要保障同志的婚姻，馬政府上台之後，卻整個推翻，現在又要從頭來過嗎？事實上你們早已委託戴教授去對同志的權益作研究，厚厚的一本報告在法務部裡面都躺多久了，你們還要重啟爐灶，從頭再來？",
            "opinion": "贊成",
            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/16/LCIDC01_1041601.pdf",
            "trustVote": "2"
        },
        {
            "name": "尤美女",
            "id": "4",
            "date": "2012-12-26",
            "year": "2012",
            "month": "12",
            "day": "26",
            "type": "公聽會",
            "quote": "舉行「同性婚姻合法化及伴侶權益法制化」公聽會",
            "opinion": "贊成",
            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/03/LCIDC01_1020304.pdf",
            "trustVote": "1"
        }
    ];


    var records = orderByVote.map((item,key)=>{
        var link = item.link;
        var opinionClasses = classSet({
          "Records-opinion": true,
          "is-for": item.opinion === '贊成',
          "is-against": item.opinion === '反對',
          "is-unclear": item.opinion === '不明確'
        });
        
        return (
            <div className="Records-entry"
                 key={key}>
                <div className="Records-entryTitle">
                  <LegislatorAvatar data={item.name} name={true}/>
                  <div className={opinionClasses}>{item.opinion}</div>
                </div>
                <div className="Records-quote">
                   {item.quote}
                </div>
                <div className="Records-info">
                    －{item.type}，{item.date}
                </div>
                <div className="Records-action">
                  <div className="Records-actionItem">
                    <span className="Records-star"><Icon icon={"star"}/> {item.trustVote}</span>  
                  </div>
                  <div className="Records-actionItem">
                    <span className="Records-more"><Icon icon={"share"}/> 124</span>
                  </div>
                  <div className="Records-actionItem">
                    <span className="Records-more"><Icon icon={"ellipsis-h"}/></span>
                  </div>
                  
                  
                </div>
                
            </div>
        )
    })

    var content = (currentTab === 'vote') ? {records} : {year_entries};
    var tabs = [{title:"依票數",id:"vote"},{title:"時間軸",id:"timeline"}];
    var tabsItem = tabs.map((item,key)=>{
      var tabClass = "Records-tab";
      if(currentTab===item.id){
        tabClass += " is-active"
      }
      var boundClick = this._onSetTab.bind(this, item.id);
      return (
        <div className={tabClass}
             onClick={boundClick}>{item.title}</div>
      )
    });
    
    return (
        <div className="Records">
          
          <select className="Records-title">
              <option>儘速修法將同性婚姻合法化</option>
              <option>其他婚姻平權的子議題A</option>
              <option>其他婚姻平權的子議題B</option>
          </select> 

          <div className="Records-description">
              在過去四年中，尤美女有 <span className="Records-voteNumbers">{entriesCount.all}</span> 筆相關的立場表達事件：<br/>
              <span className="Records-voteNumbers is-for">{entriesCount.for}</span>  筆贊成； 
              <span className="Records-voteNumbers is-against">{entriesCount.against}</span> 筆反對；
              <span className="Records-voteNumbers is-unclear">{entriesCount.unclear}</span> 筆立場不明確。
          </div>
          {tabsItem}
          {content}
          
        </div>
    );


    
  }
}




