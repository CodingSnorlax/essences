let lang = "/essences/assets/json/chinese"; // 預設繁中
// let lang = "/assets/json/chinese";

// 將 JSON 文件中的內容加載到網頁上
function loadLang(lang) {
  $.getJSON(lang + ".json", function (data) {
    // header
    $("#headerHomeLink").text(data.header.homeLink);
    $("#headerServicesLink").text(data.header.servicesLink);
    $("#headerNewsLink").text(data.header.newsLink);
    $("#headerPhotoGalleryLink").text(data.header.photoGalleryLink);
    $("#headerSocialParticipationLink").text(
      data.header.socialParticipationLink
    );
    $("#headerTeamLink").text(data.header.teamLink);
    $("#headerJoinUsLink").text(data.header.joinUsLink);
    $("#headerContactLink").text(data.header.contactLink);
    $("#headerSwitchLangBtn").text(data.header.switchLangBtn);
    // banner
    $("#bannerCompanyName").text(data.bannerArea.title);
    $("#bannerCtaIntroTitle1").text(data.bannerArea.ctaIntroTitle1);
    $("#bannerCtaIntroTitle2").text(data.bannerArea.ctaIntroTitle2);
    $("#joinEssenceBtn").text(data.bannerArea.joinEssenceBtn);
    $("#contactUsBtn").text(data.bannerArea.contactUsBtn);
    // 服務介紹區塊 (主標)
    $("#serviceAreaTitle").text(data.serviceArea.title);
    // 專案開發
    $("#projectDevMainTitle").text(
      data.serviceArea.projectDevelopment.mainTitle
    );
    $("#projectDevPerformanceTitle").text(
      data.serviceArea.projectDevelopment.performanceTitle
    );
    $("#projectDevPerformanceList1").text(
      data.serviceArea.projectDevelopment.performanceList1
    );
    $("#projectDevPerformanceList2").text(
      data.serviceArea.projectDevelopment.performanceList2
    );
    $("#projectDevPerformanceList3").text(
      data.serviceArea.projectDevelopment.performanceList3
    );
    $("#projectDevPerformanceList4").text(
      data.serviceArea.projectDevelopment.performanceList4
    );
    // logisticsSystem product structure
    $("#logisticsSystemTitle").text(data.serviceArea.logisticsSystem.title);
    // software Development
    $("#softwareDevTitle").text(data.serviceArea.softwareDevelopment.title);
    $("#softwareDevCulturalInd").text(
      data.serviceArea.softwareDevelopment.culturalInd
    );
    $("#softwareDevCulturalIndTech").text(
      data.serviceArea.softwareDevelopment.culturalIndTech
    );
    $("#softwareDevFinanceServicesInd").text(
      data.serviceArea.softwareDevelopment.financeServicesInd
    );
    $("#softwareDevFinanceServicesIndTech").text(
      data.serviceArea.softwareDevelopment.financeServicesIndTech
    );
    $("#softwareDevRealEstateCompany").text(
      data.serviceArea.softwareDevelopment.RealEstateCompany
    );
    $("#softwareDevRealEstateCompanyTech").text(
      data.serviceArea.softwareDevelopment.RealEstateCompanyTech
    );
    $("#softwareDevAutomotiveCompany").text(
      data.serviceArea.softwareDevelopment.AutomotiveCompany
    );
    $("#softwareDevAutomotiveCompanyTech").text(
      data.serviceArea.softwareDevelopment.AutomotiveCompanyTech
    );
    $("#softwareDevBankingInd").text(
      data.serviceArea.softwareDevelopment.bankingInd
    );
    $("#softwareDevBankingIndTech").text(
      data.serviceArea.softwareDevelopment.bankingIndTech
    );
    $("#softwareDevGovernment").text(
      data.serviceArea.softwareDevelopment.government
    );
    $("#softwareDevGovernmentTech").text(
      data.serviceArea.softwareDevelopment.governmentTech
    );
    $("#softwareDevLogistics").text(
      data.serviceArea.softwareDevelopment.logistics
    );
    $("#softwareDevLogisticsTech").text(
      data.serviceArea.softwareDevelopment.logisticsTech
    );
    // outsourcing services Intro
    $("#outsourcingIntroProMainTitle").text(
      data.serviceArea.outsourcingIntro.proMainTitle
    );
    $("#outsourcingIntroProTitle").text(
      data.serviceArea.outsourcingIntro.proTitle
    );
    $("#outsourcingIntroProList1").text(
      data.serviceArea.outsourcingIntro.proList1
    );
    $("#outsourcingIntroProList2").text(
      data.serviceArea.outsourcingIntro.proList2
    );
    $("#outsourcingIntroProList3").text(
      data.serviceArea.outsourcingIntro.proList3
    );
    $("#outsourcingIntroSafeTitle").text(
      data.serviceArea.outsourcingIntro.safeTitle
    );
    $("#outsourcingIntroSafeList1").text(
      data.serviceArea.outsourcingIntro.safeList1
    );
    $("#outsourcingIntroSafeList2").text(
      data.serviceArea.outsourcingIntro.safeList2
    );
    $("#outsourcingIntroSafeList3").text(
      data.serviceArea.outsourcingIntro.safeList3
    );
    $("#outsourcingIntroSafeList4").text(
      data.serviceArea.outsourcingIntro.safeList4
    );
    $("#outsourcingIntroSafeList5").text(
      data.serviceArea.outsourcingIntro.safeList5
    );

    // outsourcing services
    $("#outsourcingTitle").text(data.serviceArea.outsourcing.title);
    $("#outsourcingAi").text(data.serviceArea.outsourcing.ai);
    $("#outsourcingIot").text(data.serviceArea.outsourcing.iot);
    $("#outsourcing4G").text(data.serviceArea.outsourcing.fourthGeneration);
    $("#outsourcingBlockChain").text(data.serviceArea.outsourcing.blockChain);
    $("#outsourcingCloud").text(data.serviceArea.outsourcing.cloud);
    $("#outsourcingFinTech").text(data.serviceArea.outsourcing.finTech);
    $("#outsourcingOthers").text(data.serviceArea.outsourcing.others);
    $(".techteam").text(data.serviceArea.outsourcing.techTeam);
    // 團隊介紹
    $("#teamIntroTitle").text(data.teamArea.title);
    // join us area
    $("#joinEssencesAreaMainTitle").text(data.joinEssencesArea.mainTitle);
    // 員工福利
    $("#joinEssencesAreaEmployeesBenefitsTitle").text(
      data.joinEssencesArea.employeesBenefits.title
    );
    $("#joinEssencesAreaEmployeesBenefitsList1").text(
      data.joinEssencesArea.employeesBenefits.list1
    );
    $("#joinEssencesAreaEmployeesBenefitsList2").text(
      data.joinEssencesArea.employeesBenefits.list2
    );
    $("#joinEssencesAreaEmployeesBenefitsList3").text(
      data.joinEssencesArea.employeesBenefits.list3
    );
    $("#joinEssencesAreaEmployeesBenefitsList4").text(
      data.joinEssencesArea.employeesBenefits.list4
    );
    $("#joinEssencesAreaEmployeesBenefitsList5").text(
      data.joinEssencesArea.employeesBenefits.list5
    );
    $("#joinEssencesAreaEmployeesBenefitsList6").text(
      data.joinEssencesArea.employeesBenefits.list6
    );
    $("#joinEssencesAreaEmployeesBenefitsList7").text(
      data.joinEssencesArea.employeesBenefits.list7
    );
    $("#joinEssencesAreaEmployeesBenefitsList8").text(
      data.joinEssencesArea.employeesBenefits.list8
    );
    $("#joinEssencesAreaEmployeesBenefitsList9").text(
      data.joinEssencesArea.employeesBenefits.list9
    );
    // 未來展望
    $("#joinEssencesAreaFutureOutlookTitle").text(
      data.joinEssencesArea.futureOutlook.title
    );
    $("#joinEssencesAreaFutureOutlookIntro").text(
      data.joinEssencesArea.futureOutlook.intro
    );
    $("#joinEssencesAreaFutureOutlookList1").text(
      data.joinEssencesArea.futureOutlook.list1
    );
    $("#joinEssencesAreaFutureOutlookList2").text(
      data.joinEssencesArea.futureOutlook.list2
    );
    $("#joinEssencesAreaFutureOutlookList3").text(
      data.joinEssencesArea.futureOutlook.list3
    );
    $("#joinEssencesAreaFutureOutlookList4").text(
      data.joinEssencesArea.futureOutlook.list4
    );
  });
}

let isMobile = window.matchMedia("(max-width: 767px)").matches;
function checkIsMobile(isMobile) {
  if (isMobile) {
    $("#enCta").removeClass().addClass("d-none");
    $("#chineseCta").removeClass().addClass("d-none");
  } else {
    if (lang === "/essences/assets/json/en") {
      $("#chineseCta").addClass("d-none");
      $("#enCta")
        .removeClass()
        .addClass("d-block mb-4 content-style text-darkBlue");

      $(".fontSize-switch")
        .removeClass()
        .addClass("fw-bold fs-5 text-center mb-2 text-light fontSize-switch");
    } else {
      $("#chineseCta").removeClass().addClass("d-block mb-4 content-style");
      $("#enCta").addClass("d-none");

      $(".fontSize-switch")
        .removeClass()
        .addClass("fw-bold fs-3 text-center mb-2 text-light fontSize-switch");
    }
  }
}

$(document).ready(function () {
  loadLang(lang); // 加載默認語言版本的內容
  // $("#chineseCta").show();
  checkIsMobile(isMobile); // 如果是手機版, 在畫面載入就先判斷一次
  if (lang === "/essences/assets/json/tw") {
    $("#cargo-product-structure-en").show();
    $("#cargo-product-structure-tw").hide();
  } else {
    $("#cargo-product-structure-tw").show();
    $("#cargo-product-structure-en").hide();
  }

  $("#headerSwitchLangBtn").click(function () {
    // isMobile = window.matchMedia("(max-width: 767px)").matches;
    console.log("偵測是否是手機板", isMobile);

    if (lang === "/essences/assets/json/en") {
      // 切中文版
      lang = "/essences/assets/json/chinese";
      $("#chineseCta").removeClass().addClass("d-block mb-4 content-style");
      $("#enCta").addClass("d-none");
      $("#en-logo").removeClass().addClass("d-block mb-3");
      $("#joinEssenceBtn").show();
      $("#cargo-product-structure-tw").show();
      $("#cargo-product-structure-en").hide();
      $("[id$='projectDevDiagram']").attr(
        "src",
        "./assets/img/program-service-darkblue-tw.png"
      );
    } else {
      // 切英文版
      lang = "/essences/assets/json/en";
      $("#chineseCta").addClass("d-none");
      $("#enCta")
        .removeClass()
        .addClass("d-block mb-4 content-style text-darkBlue");
      $("#joinEssenceBtn").hide();
      $("#cargo-product-structure-en").show();
      $("#cargo-product-structure-tw").hide();
      $("[id$='projectDevDiagram']").attr(
        "src",
        "./assets/img/program-service-darkblue-eng.png"
      );
    }

    // 每次按完都要確認一次是否是手機版
    checkIsMobile(isMobile);
    $("body").removeClass().addClass(lang);
    loadLang(lang); // 加載切換後的語言版本的內容
  });

  // 視窗變化時就觸發 function
  $(window).resize(function () {
    isMobile = window.matchMedia("(max-width: 767px)").matches;
    checkIsMobile(isMobile);
  });

  const swiper = new Swiper(".swiper", {
    loop: false,
    rewind: true,
    direction: "horizontal",
    spaceBetween: 15,
    breakpoints: {
      492: {
        slidesPerView: 2, // 每行顯示卡片數量
        spaceBetween: 15, // 卡片間距
      },
      991: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      // 1200: {
      //   slidesPerView: 5,
      //   spaceBetween: 30,
      // },
    },
    autoplay: {
      delay: 2000,
    },
  });
});

// 聯絡我們的表格
function submitHandler() {
  let receiver = "judychien@essences.com.tw";
  let body = "";
  body += "From：" + contactName.value + "%0A";
  body += "E-mail：" + mailAddress.value + "%0A";
  body += "Tel：" + phone.value + "%0A%0A%0A";
  body += content.value;
  // 將 body 資料送出
  mailTo.href = `mailto:${receiver}?subject=${mailTitle.value}&body=${body}`;
  mailTo.click();
  // 清除 form
  contactName.value = "";
  mailAddress.value = "";
  phone.value = "";
  content.value = "";
  mailTitle.value = "";
}
