import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { usenavbarCb, usewrapper_navCb, usehome_hero_sectionCb, usewrapper_home_heroCb, usehome_hero_content_wrapperCb, usehero_home_heading_wrapperCb, usehome_hero_paragraph_wrapperCb, useDiv8Cb, usehome_hero_button_wrapperCb, usebutton_inline_blockCb, usehero_link_wrapperCb, usehome_hero_image_wrapperCb, usetrusted_bt_sectionCb, usetrusted_by_wrapperCb, usetrusted_by_text_wrapperCb, usetrusted_logo_flexboxCb, usetrusted_image_oneCb, usetrusted_image_twoCb, usetrusted_image_fourCb, usetrusted_image_thirdCb, useservice_sectionCb, useservice_wrapperCb, useservice_heading_and_text_wrapperCb, useservice_sub_text_wrapperCb, useservice_heading_wrapperCb, useservices_flexboxCb, useservice_wrapper_firstCb, useservice_item_icon_wrapperCb, useservice_item_heading_wrapperCb, useservice_item_paragraph_wrapperCb, useservice_pointer_wrapperCb, useservice_pointer_itemCb, useservice_pointer_item_twoCb, useservice_pointer_item_threeCb, usereal_second_service_wrapperCb, usesecond_service_pointer_threeCb, usesecond_service_pointer_twoCb, usesecond_service_pointer_oneCb, useitemText1Cb, usereal_second_service_item_paragraph_wrapperCb, usereal_second_service_headingCb, usereal_second_service_item_icon_wrapperCb, useservice_wrapper_thirdCb, usethird_service_pointer_wrapper_threeCb, usethird_service_pointer_wrapper_twoCb, usethird_service_pointer_wrapper_oneCb, usethird_service_pointer_oneCb, usethird_service_item_paragraph_wrapperCb, usethird_service_item_heading_wrapperCb, usethird_service_item_icon_wrapperCb, usecase_studies_sectionCb, usecase_studies_heading_wrapperCb, usecase_studies_heading_and_subText_wrapperCb, usecase_studies_subText_wrapperCb, usecase_studies_main_headingCb, useproject_sliderCb, usefirst_sliderCb, useproject_slider_maskCb, usefirst_project_slideCb, usew_dyn_listCb, useproject_slide_link_blockCb, useproject_slide_image_wrapperCb, useproject_slide_contentCb, useproject_slide_tag_wrapperCb, useproject_slide_main_headingCb, useviwe_project_divCb, useview_project_arrowCb, usesecond_sliderCb, usesecond_project_slider_maskCb, usesecond_project_slideCb, usesecond_w_dyn_listCb, usesecond_project_slide_link_blockCb, usesecond_project_slide_contentCb, usesecond_view_project_divCb, usesecond_view_project_arrowCb, usesecond_project_slide_main_headingCb, usesecond_project_tag_wrapperCb, usesecond_project_slide_image_wrapperCb, useproject_slider_left_arrowCb, useproject_arrow_left_arrow_icon_wrapperCb, useproject_slider_right_arrowCb, useproject_arrow_right_icon_wrapperCb, useFALSE_DIV_REJECTED_IGNORECb, useDiv65Cb, useFlex26Cb, useDiv63Cb, useFlex25Cb, useFlex24Cb, useDiv61Cb, usefalse_spareCb, useDiv184Cb, useblog_sectionCb, useblog_homepage_wrapperCb, useblog_heading_and_subtext_wrapperCb, useblog_item_read_the_article_wrapperCb, useblog_item_read_the_article_text_wrapperCb, useblog_item_arrow_wrapperCb, useblog_subtext_mainCb, useblog_heading_wrapperCb, useblog_content_wrapperCb, useblog_dyn_item_firstCb, useblog_section_blog_item_firstCb, useblog_item_date_and_time_wrapperCb, useblog_item_date_wrapperCb, useblog_item_time_wrapperCb, useblog_item_heading_wrapperCb, useblog_read_the_article_wrapperCb, useread_the_article_textCb, useread_article_white_arrowCb, useblog_dyn_second_itemCb, useblog_section_blog_item_secondCb, useblog_read_the_article_secondCb, useread_article_white_arrow_secondCb, useread_the_article_text_secondCb, useblog_section_heading_wrapper_secondCb, useblog_section_date_and_time_wrapper_secondCb, useblog_item_time_wrapper_secondCb, useblog_item_date_wrapper_secondCb, useblog_dyn_third_itemCb, useblog_section_blog_item_thirdCb, useblog_read_the_article_thirdCb, useread_article_white_arrow_thirdCb, useread_the_article_text_thirdCb, useblog_section_heading_wrapper_thirdCb, useblog_section_date_and_time_wrapper_thirdCb, useblog_item_time_wrapper_thirdCb, useblog_item_date_wrapper_thirdCb, useblog_dyn_fourth_itemCb, useblog_section_blog_item_fourthCb, useblog_read_the_article_fourthCb, useread_article_white_arrow_fourthCb, useread_the_article_fourthCb, useblog_section_heading_wrapper_fourthCb, useblog_section_date_and_time_wrapper_fourthCb, useblog_item_time_wrapper_fourthCb, useblog_item_date_wrapper_fourthCb, useblog_dyn_fifth_itemCb, useblog_section_blog_item_fifthCb, useblog_read_the_article_fifthCb, useread_article_white_arrow_fifthCb, useread_the_article_fifthCb, useblog_section_heading_wrapper_fifthCb, useblog_section_date_and_time_wrapper_fifthCb, useblog_item_time_wrapper_fifthCb, useblog_item_date_wrapper_fifthCb, useabout_sectionCb, useabout_wrapperCb, useabout_heading_and_subtext_wrapperCb, useabout_subtext_wrapperCb, useabout_heading_wrapperCb, useabout_content_wrapperCb, uselightboxCb, uselightbox_second_image_wrapperCb, useligthbox_first_image_wrapperCb, uselightbox_nexr_two_image_containerCb, uselightbox_third_image_wrapperCb, uselightbox_fourth_image_wrapperCb, useexperience_sectionCb, useexperience_wrapperCb, useexperience_left_wrapperCb, useexperience_heading_wrapperCb, useexperience_item_containerCb, useexperience_item_wrapperCb, useexperience_item_heading_and_subheading_wrapperCb, useexperience_item_heading_wrapperCb, useexperience_item_subheading_wrapperCb, useexperience_arrow_and_time_period_wrapperCb, useexperience_time_period_wrapperCb, useexperience_arrow_wrapperCb, useexperience_item_wrapper_secondCb, useexperience_arrow_and_time_period_wrapper_secondCb, useexperience_arrow_wrapper_secondCb, useexperience_time_period_wrapper_secondCb, useexperience_item_heading_and_subheading_wrapper_secondCb, useexperience_item_subheading_wrapper_secondCb, useexperience_item_heading_wrapper_secondCb, useexperience_item_wrapper_thirdCb, useexperience_arrow_and_time_period_wrapper_thirdCb, useexperience_arrow_wrapper_thirdCb, useexperience_time_period_wrapper_thirdCb, useexperience_item_heading_and_subheading_wrapper_thirdCb, useexperience_item_subheading_wrapper_thirdCb, useexperience_item_heading_wrapper_thirdCb, useexperience_right_wrapperCb, useexperience_right_item_containerCb, useexperience_right_third_item_wrapperCb, useexperience_right_item_heading_and_subheading_third_wrapperCb, useexperience_right_item_heading_third_wrapperCb, useexperience_right_item_subheading_third_wrapperCb, useexperience_right_arrow_and_time_period_third_wrapperCb, useexperience_right_time_period_third_wrapperCb, useexperience_right_arrow_third_wrapperCb, useexperience_right_second_item_wrapperCb, useexperience_right_item_heading_and_subheading_second_wrapperCb, useexperience_right_item_second_heading_wrapperCb, useexperience_right_item_subheading_second_wrapperCb, useexperience_right_arrow_and_time_period_second_wrapperCb, useexperience_right_time_period_second_wrapperCb, useexperience_right_arrow_second_wrapperCb, useexperience_right_first_item_wrapperCb, useexperience_right_arrow_and_time_period_first_wrapperCb, useexperience_right_arrow_wrapperCb, useexperience_right_time_period_wrapperCb, useexperience_right_item_heading_and_subheading_first_wrapperCb, useexperience_right_item_subheading_wrapperCb, useexperience_right_item_heading_wrapperCb, useexperience_right_heading_wrapperCb, usetestimonial_sectionCb, usetestimonial_headings_wrapperCb, usetestimonial_heading_subtext_wrapperCb, usetestimonial_heading_wrapperCb, usetestimonial_down_wrapperCb, usetestimonial_sliderCb, usetestimonial_containerCb, usetestimonial_image_wrapperCb, usetestimonial_contentCb, usetestimonial_quote_item_wrapperCb, usetestimonial_content_wrapperCb, usetestimonial_name_and_position_wrapperCb, usetestimonial_name_wrapperCb, usetestimonial_nameCb, usetestimonial_descCb, usetestimonial_left_arrowCb, usetestimonial_left_arrow_icon_wrapperCb, usetestimonial_right_arrowCb, usetestimonial_right_arrow_icon_wrapperCb, usefaq_sectionCb, usefaq_headerCb, usefaq_subtext_wrapperCb, usefaq_heading_wrapperCb, usefaq_downCb, usefaq_containerCb, usefaq_leftCb, usefaq_item_firstCb, usefaq_question_and_arrow_wrapperCb, usefaq_question_wrapperCb, usefaq_icon_wrapperCb, usefaq_item_secondCb, usefaq_question_and_arrow_wrapper_secondCb, usefaq_icon_wrapper_secondCb, usefaq_question_wrapper_secondCb, usefaq_item_thirdCb, usefaq_question_and_arrow_wrapper_thirdCb, usefaq_icon_wrapper_thirdCb, usefaq_question_wrapper_thirdCb, usefaq_item_fourthCb, usefaq_question_and_arrow_wrapper_fourthCb, usefaq_icon_wrapper_fourthCb, usefaq_question_wrapper_fourthCb, usefaq_rightCb, usefaq_right_item_fourthCb, usefaq_question_and_arrow_wrapper_right_fourthCb, usefaq_question_wrapper_right_fourthCb, usefaq_icon_wrapper_right_fourthCb, usefaq_right_item_thirdCb, usefaq_question_and_arrow_wrapper_right_thirdCb, usefaq_question_wrapper_right_thirdCb, usefaq_icon_wrapper_right_thirdCb, usefaq_right_item_secondCb, usefaq_question_and_arrow_wrapper_right_secondCb, usefaq_question_wrapper_right_secondCb, usefaq_icon_wrapper_right_secondCb, usefaq_right_item_firstCb, usefaq_question_and_arrow_wrapper_right_firstCb, usefaq_icon_wrapper_right_firstCb, usefaq_question_wrapper_right_firstCb, usefooter_sectionCb, usefooter_wrapperCb, usefooter_heading_wrapperCb, usefooter_ctaCb, usefooter_address_and_link_wrapperCb, usefooter_address_wrapperCb, usefooter_logo_wrapCb, usecontact_email_footerCb, useemail_image_footer_wrapperCb, usefooter_linksCb, usefooter_aboutCb, usefooter_servicesCb, useexperience_footerCb, usesub_footer_wrapperCb, usesub_footer_textCb, useImageCb, useblogCb, useaboutCb, useservicesCb, useprojectsCb, usenoneCb, useTextBox1Cb, useparagraphCb, useDiv10Cb, useDiv11Cb, useImage3Cb, useButtonCb, usehome_hero_link_textCb, useImage2Cb, usetrusted_by_text_blockCb, useimage_oneCb, useImage5Cb, useimage_fourCb, useimage_thirdCb, useservices_headingCb, usemain_headingCb, useimage_containCb, useheadingCb, useTextBox8Cb, usetextCb, usesecondtextCb, usethirdtextCb, useitemText3Cb, useitemText2Cb, usereal_second_service_pointer_oneCb, usereal_second_service_wrapper_paragraphCb, usesecond_service_headingCb, usesecond_real_imageCb, usethird_service_pointer_threeCb, usethird_service_pointer_twoCb, usereal_third_service_pointer_oneCb, usethird_paragraphCb, usethird_headingCb, usethird_service_iconCb, usecase_studies_project_buttonCb, usecase_studies_subText_firstCb, useTextBox23Cb, useImage12Cb, useproject_slide_tag_textCb, useTextBox25Cb, useproject_slide_text_blockCb, useImage13Cb, usesecond_project_slide_text_blockCb, useImage14Cb, useTextBox28Cb, usesecond_project_slide_tag_textCb, useImage15Cb, useImage16Cb, useImage19Cb, useImage35Cb, useDiv64Cb, useDiv62Cb, useTextBox30Cb, useImage17Cb, useTextBox31Cb, usesecond_image_containCb, useTextBox101Cb, useblog_item_view_allCb, usewhite_arrowCb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useImage20Cb, useImage21Cb, useTextBox39Cb, useTextBox42Cb, useTextBox40Cb, useTextBox41Cb, useImage22Cb, useTextBox43Cb, useTextBox46Cb, useTextBox44Cb, useTextBox45Cb, useImage23Cb, useTextBox47Cb, useTextBox50Cb, useTextBox48Cb, useTextBox49Cb, useImage24Cb, useTextBox51Cb, useTextBox54Cb, useTextBox52Cb, useTextBox53Cb, useTextBox55Cb, useTextBox56Cb, useTextBox57Cb, useImage26Cb, useImage25Cb, useImage27Cb, useImage28Cb, useTextBox58Cb, useexperience_gray_bottom_borderCb, useTextBox59Cb, useTextBox60Cb, useTextBox62Cb, useImage29Cb, useexperience_gary_bottom_border_secondCb, useImage30Cb, useTextBox63Cb, useTextBox64Cb, useTextBox65Cb, useexperience_gray_bottom_border_thirdCb, useImage31Cb, useTextBox66Cb, useTextBox67Cb, useTextBox68Cb, useexperience_right_gary_bottom_third_borderCb, useTextBox69Cb, useTextBox70Cb, useTextBox71Cb, useImage32Cb, useexperience_right_gray_bottom_second_wrapperCb, useTextBox72Cb, useTextBox73Cb, useTextBox74Cb, useImage33Cb, useexperience_right_gray_bottom_border_firstCb, useImage34Cb, useTextBox75Cb, useTextBox76Cb, useTextBox77Cb, useTextBox78Cb, useTextBox79Cb, useTextBox80Cb, useImage36Cb, useImage37Cb, useTextBox81Cb, useTextBox82Cb, useTextBox83Cb, useImage38Cb, useImage39Cb, useTextBox84Cb, useTextBox85Cb, useTextBox86Cb, useImage40Cb, useImage41Cb, useTextBox87Cb, useImage42Cb, useTextBox88Cb, useImage43Cb, useTextBox89Cb, useTextBox90Cb, useImage44Cb, useTextBox91Cb, useImage45Cb, useTextBox92Cb, useImage46Cb, useImage47Cb, useTextBox93Cb, usefooter_headingCb, useTextBox95Cb, useTextBox96Cb, useImage48Cb, useTextBox97Cb, useImage49Cb, useTextBox98Cb, useTextBox102Cb, useTextBox103Cb, useTextBox99Cb, useTextBox104Cb, useTextBox105Cb, useexperience_footer_textCb, useTextBox106Cb, useTextBox107Cb, useTextBox108Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const navbarProps = useStore((state)=>state["Home"]["navbar"]);
const navbarIoProps = useIoStore((state)=>state["Home"]["navbar"]);
const navbarCb = usenavbarCb()
const wrapper_navProps = useStore((state)=>state["Home"]["wrapper_nav"]);
const wrapper_navIoProps = useIoStore((state)=>state["Home"]["wrapper_nav"]);
const wrapper_navCb = usewrapper_navCb()
const home_hero_sectionProps = useStore((state)=>state["Home"]["home_hero_section"]);
const home_hero_sectionIoProps = useIoStore((state)=>state["Home"]["home_hero_section"]);
const home_hero_sectionCb = usehome_hero_sectionCb()
const wrapper_home_heroProps = useStore((state)=>state["Home"]["wrapper_home_hero"]);
const wrapper_home_heroIoProps = useIoStore((state)=>state["Home"]["wrapper_home_hero"]);
const wrapper_home_heroCb = usewrapper_home_heroCb()
const home_hero_content_wrapperProps = useStore((state)=>state["Home"]["home_hero_content_wrapper"]);
const home_hero_content_wrapperIoProps = useIoStore((state)=>state["Home"]["home_hero_content_wrapper"]);
const home_hero_content_wrapperCb = usehome_hero_content_wrapperCb()
const hero_home_heading_wrapperProps = useStore((state)=>state["Home"]["hero_home_heading_wrapper"]);
const hero_home_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["hero_home_heading_wrapper"]);
const hero_home_heading_wrapperCb = usehero_home_heading_wrapperCb()
const home_hero_paragraph_wrapperProps = useStore((state)=>state["Home"]["home_hero_paragraph_wrapper"]);
const home_hero_paragraph_wrapperIoProps = useIoStore((state)=>state["Home"]["home_hero_paragraph_wrapper"]);
const home_hero_paragraph_wrapperCb = usehome_hero_paragraph_wrapperCb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const home_hero_button_wrapperProps = useStore((state)=>state["Home"]["home_hero_button_wrapper"]);
const home_hero_button_wrapperIoProps = useIoStore((state)=>state["Home"]["home_hero_button_wrapper"]);
const home_hero_button_wrapperCb = usehome_hero_button_wrapperCb()
const button_inline_blockProps = useStore((state)=>state["Home"]["button_inline_block"]);
const button_inline_blockIoProps = useIoStore((state)=>state["Home"]["button_inline_block"]);
const button_inline_blockCb = usebutton_inline_blockCb()
const hero_link_wrapperProps = useStore((state)=>state["Home"]["hero_link_wrapper"]);
const hero_link_wrapperIoProps = useIoStore((state)=>state["Home"]["hero_link_wrapper"]);
const hero_link_wrapperCb = usehero_link_wrapperCb()
const home_hero_image_wrapperProps = useStore((state)=>state["Home"]["home_hero_image_wrapper"]);
const home_hero_image_wrapperIoProps = useIoStore((state)=>state["Home"]["home_hero_image_wrapper"]);
const home_hero_image_wrapperCb = usehome_hero_image_wrapperCb()
const trusted_bt_sectionProps = useStore((state)=>state["Home"]["trusted_bt_section"]);
const trusted_bt_sectionIoProps = useIoStore((state)=>state["Home"]["trusted_bt_section"]);
const trusted_bt_sectionCb = usetrusted_bt_sectionCb()
const trusted_by_wrapperProps = useStore((state)=>state["Home"]["trusted_by_wrapper"]);
const trusted_by_wrapperIoProps = useIoStore((state)=>state["Home"]["trusted_by_wrapper"]);
const trusted_by_wrapperCb = usetrusted_by_wrapperCb()
const trusted_by_text_wrapperProps = useStore((state)=>state["Home"]["trusted_by_text_wrapper"]);
const trusted_by_text_wrapperIoProps = useIoStore((state)=>state["Home"]["trusted_by_text_wrapper"]);
const trusted_by_text_wrapperCb = usetrusted_by_text_wrapperCb()
const trusted_logo_flexboxProps = useStore((state)=>state["Home"]["trusted_logo_flexbox"]);
const trusted_logo_flexboxIoProps = useIoStore((state)=>state["Home"]["trusted_logo_flexbox"]);
const trusted_logo_flexboxCb = usetrusted_logo_flexboxCb()
const trusted_image_oneProps = useStore((state)=>state["Home"]["trusted_image_one"]);
const trusted_image_oneIoProps = useIoStore((state)=>state["Home"]["trusted_image_one"]);
const trusted_image_oneCb = usetrusted_image_oneCb()
const trusted_image_twoProps = useStore((state)=>state["Home"]["trusted_image_two"]);
const trusted_image_twoIoProps = useIoStore((state)=>state["Home"]["trusted_image_two"]);
const trusted_image_twoCb = usetrusted_image_twoCb()
const trusted_image_fourProps = useStore((state)=>state["Home"]["trusted_image_four"]);
const trusted_image_fourIoProps = useIoStore((state)=>state["Home"]["trusted_image_four"]);
const trusted_image_fourCb = usetrusted_image_fourCb()
const trusted_image_thirdProps = useStore((state)=>state["Home"]["trusted_image_third"]);
const trusted_image_thirdIoProps = useIoStore((state)=>state["Home"]["trusted_image_third"]);
const trusted_image_thirdCb = usetrusted_image_thirdCb()
const service_sectionProps = useStore((state)=>state["Home"]["service_section"]);
const service_sectionIoProps = useIoStore((state)=>state["Home"]["service_section"]);
const service_sectionCb = useservice_sectionCb()
const service_wrapperProps = useStore((state)=>state["Home"]["service_wrapper"]);
const service_wrapperIoProps = useIoStore((state)=>state["Home"]["service_wrapper"]);
const service_wrapperCb = useservice_wrapperCb()
const service_heading_and_text_wrapperProps = useStore((state)=>state["Home"]["service_heading_and_text_wrapper"]);
const service_heading_and_text_wrapperIoProps = useIoStore((state)=>state["Home"]["service_heading_and_text_wrapper"]);
const service_heading_and_text_wrapperCb = useservice_heading_and_text_wrapperCb()
const service_sub_text_wrapperProps = useStore((state)=>state["Home"]["service_sub_text_wrapper"]);
const service_sub_text_wrapperIoProps = useIoStore((state)=>state["Home"]["service_sub_text_wrapper"]);
const service_sub_text_wrapperCb = useservice_sub_text_wrapperCb()
const service_heading_wrapperProps = useStore((state)=>state["Home"]["service_heading_wrapper"]);
const service_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["service_heading_wrapper"]);
const service_heading_wrapperCb = useservice_heading_wrapperCb()
const services_flexboxProps = useStore((state)=>state["Home"]["services_flexbox"]);
const services_flexboxIoProps = useIoStore((state)=>state["Home"]["services_flexbox"]);
const services_flexboxCb = useservices_flexboxCb()
const service_wrapper_firstProps = useStore((state)=>state["Home"]["service_wrapper_first"]);
const service_wrapper_firstIoProps = useIoStore((state)=>state["Home"]["service_wrapper_first"]);
const service_wrapper_firstCb = useservice_wrapper_firstCb()
const service_item_icon_wrapperProps = useStore((state)=>state["Home"]["service_item_icon_wrapper"]);
const service_item_icon_wrapperIoProps = useIoStore((state)=>state["Home"]["service_item_icon_wrapper"]);
const service_item_icon_wrapperCb = useservice_item_icon_wrapperCb()
const service_item_heading_wrapperProps = useStore((state)=>state["Home"]["service_item_heading_wrapper"]);
const service_item_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["service_item_heading_wrapper"]);
const service_item_heading_wrapperCb = useservice_item_heading_wrapperCb()
const service_item_paragraph_wrapperProps = useStore((state)=>state["Home"]["service_item_paragraph_wrapper"]);
const service_item_paragraph_wrapperIoProps = useIoStore((state)=>state["Home"]["service_item_paragraph_wrapper"]);
const service_item_paragraph_wrapperCb = useservice_item_paragraph_wrapperCb()
const service_pointer_wrapperProps = useStore((state)=>state["Home"]["service_pointer_wrapper"]);
const service_pointer_wrapperIoProps = useIoStore((state)=>state["Home"]["service_pointer_wrapper"]);
const service_pointer_wrapperCb = useservice_pointer_wrapperCb()
const service_pointer_itemProps = useStore((state)=>state["Home"]["service_pointer_item"]);
const service_pointer_itemIoProps = useIoStore((state)=>state["Home"]["service_pointer_item"]);
const service_pointer_itemCb = useservice_pointer_itemCb()
const service_pointer_item_twoProps = useStore((state)=>state["Home"]["service_pointer_item_two"]);
const service_pointer_item_twoIoProps = useIoStore((state)=>state["Home"]["service_pointer_item_two"]);
const service_pointer_item_twoCb = useservice_pointer_item_twoCb()
const service_pointer_item_threeProps = useStore((state)=>state["Home"]["service_pointer_item_three"]);
const service_pointer_item_threeIoProps = useIoStore((state)=>state["Home"]["service_pointer_item_three"]);
const service_pointer_item_threeCb = useservice_pointer_item_threeCb()
const real_second_service_wrapperProps = useStore((state)=>state["Home"]["real_second_service_wrapper"]);
const real_second_service_wrapperIoProps = useIoStore((state)=>state["Home"]["real_second_service_wrapper"]);
const real_second_service_wrapperCb = usereal_second_service_wrapperCb()
const second_service_pointer_threeProps = useStore((state)=>state["Home"]["second_service_pointer_three"]);
const second_service_pointer_threeIoProps = useIoStore((state)=>state["Home"]["second_service_pointer_three"]);
const second_service_pointer_threeCb = usesecond_service_pointer_threeCb()
const second_service_pointer_twoProps = useStore((state)=>state["Home"]["second_service_pointer_two"]);
const second_service_pointer_twoIoProps = useIoStore((state)=>state["Home"]["second_service_pointer_two"]);
const second_service_pointer_twoCb = usesecond_service_pointer_twoCb()
const second_service_pointer_oneProps = useStore((state)=>state["Home"]["second_service_pointer_one"]);
const second_service_pointer_oneIoProps = useIoStore((state)=>state["Home"]["second_service_pointer_one"]);
const second_service_pointer_oneCb = usesecond_service_pointer_oneCb()
const itemText1Props = useStore((state)=>state["Home"]["itemText1"]);
const itemText1IoProps = useIoStore((state)=>state["Home"]["itemText1"]);
const itemText1Cb = useitemText1Cb()
const real_second_service_item_paragraph_wrapperProps = useStore((state)=>state["Home"]["real_second_service_item_paragraph_wrapper"]);
const real_second_service_item_paragraph_wrapperIoProps = useIoStore((state)=>state["Home"]["real_second_service_item_paragraph_wrapper"]);
const real_second_service_item_paragraph_wrapperCb = usereal_second_service_item_paragraph_wrapperCb()
const real_second_service_headingProps = useStore((state)=>state["Home"]["real_second_service_heading"]);
const real_second_service_headingIoProps = useIoStore((state)=>state["Home"]["real_second_service_heading"]);
const real_second_service_headingCb = usereal_second_service_headingCb()
const real_second_service_item_icon_wrapperProps = useStore((state)=>state["Home"]["real_second_service_item_icon_wrapper"]);
const real_second_service_item_icon_wrapperIoProps = useIoStore((state)=>state["Home"]["real_second_service_item_icon_wrapper"]);
const real_second_service_item_icon_wrapperCb = usereal_second_service_item_icon_wrapperCb()
const service_wrapper_thirdProps = useStore((state)=>state["Home"]["service_wrapper_third"]);
const service_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["service_wrapper_third"]);
const service_wrapper_thirdCb = useservice_wrapper_thirdCb()
const third_service_pointer_wrapper_threeProps = useStore((state)=>state["Home"]["third_service_pointer_wrapper_three"]);
const third_service_pointer_wrapper_threeIoProps = useIoStore((state)=>state["Home"]["third_service_pointer_wrapper_three"]);
const third_service_pointer_wrapper_threeCb = usethird_service_pointer_wrapper_threeCb()
const third_service_pointer_wrapper_twoProps = useStore((state)=>state["Home"]["third_service_pointer_wrapper_two"]);
const third_service_pointer_wrapper_twoIoProps = useIoStore((state)=>state["Home"]["third_service_pointer_wrapper_two"]);
const third_service_pointer_wrapper_twoCb = usethird_service_pointer_wrapper_twoCb()
const third_service_pointer_wrapper_oneProps = useStore((state)=>state["Home"]["third_service_pointer_wrapper_one"]);
const third_service_pointer_wrapper_oneIoProps = useIoStore((state)=>state["Home"]["third_service_pointer_wrapper_one"]);
const third_service_pointer_wrapper_oneCb = usethird_service_pointer_wrapper_oneCb()
const third_service_pointer_oneProps = useStore((state)=>state["Home"]["third_service_pointer_one"]);
const third_service_pointer_oneIoProps = useIoStore((state)=>state["Home"]["third_service_pointer_one"]);
const third_service_pointer_oneCb = usethird_service_pointer_oneCb()
const third_service_item_paragraph_wrapperProps = useStore((state)=>state["Home"]["third_service_item_paragraph_wrapper"]);
const third_service_item_paragraph_wrapperIoProps = useIoStore((state)=>state["Home"]["third_service_item_paragraph_wrapper"]);
const third_service_item_paragraph_wrapperCb = usethird_service_item_paragraph_wrapperCb()
const third_service_item_heading_wrapperProps = useStore((state)=>state["Home"]["third_service_item_heading_wrapper"]);
const third_service_item_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["third_service_item_heading_wrapper"]);
const third_service_item_heading_wrapperCb = usethird_service_item_heading_wrapperCb()
const third_service_item_icon_wrapperProps = useStore((state)=>state["Home"]["third_service_item_icon_wrapper"]);
const third_service_item_icon_wrapperIoProps = useIoStore((state)=>state["Home"]["third_service_item_icon_wrapper"]);
const third_service_item_icon_wrapperCb = usethird_service_item_icon_wrapperCb()
const case_studies_sectionProps = useStore((state)=>state["Home"]["case_studies_section"]);
const case_studies_sectionIoProps = useIoStore((state)=>state["Home"]["case_studies_section"]);
const case_studies_sectionCb = usecase_studies_sectionCb()
const case_studies_heading_wrapperProps = useStore((state)=>state["Home"]["case_studies_heading_wrapper"]);
const case_studies_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["case_studies_heading_wrapper"]);
const case_studies_heading_wrapperCb = usecase_studies_heading_wrapperCb()
const case_studies_heading_and_subText_wrapperProps = useStore((state)=>state["Home"]["case_studies_heading_and_subText_wrapper"]);
const case_studies_heading_and_subText_wrapperIoProps = useIoStore((state)=>state["Home"]["case_studies_heading_and_subText_wrapper"]);
const case_studies_heading_and_subText_wrapperCb = usecase_studies_heading_and_subText_wrapperCb()
const case_studies_subText_wrapperProps = useStore((state)=>state["Home"]["case_studies_subText_wrapper"]);
const case_studies_subText_wrapperIoProps = useIoStore((state)=>state["Home"]["case_studies_subText_wrapper"]);
const case_studies_subText_wrapperCb = usecase_studies_subText_wrapperCb()
const case_studies_main_headingProps = useStore((state)=>state["Home"]["case_studies_main_heading"]);
const case_studies_main_headingIoProps = useIoStore((state)=>state["Home"]["case_studies_main_heading"]);
const case_studies_main_headingCb = usecase_studies_main_headingCb()
const project_sliderProps = useStore((state)=>state["Home"]["project_slider"]);
const project_sliderIoProps = useIoStore((state)=>state["Home"]["project_slider"]);
const project_sliderCb = useproject_sliderCb()
const first_sliderProps = useStore((state)=>state["Home"]["first_slider"]);
const first_sliderIoProps = useIoStore((state)=>state["Home"]["first_slider"]);
const first_sliderCb = usefirst_sliderCb()
const project_slider_maskProps = useStore((state)=>state["Home"]["project_slider_mask"]);
const project_slider_maskIoProps = useIoStore((state)=>state["Home"]["project_slider_mask"]);
const project_slider_maskCb = useproject_slider_maskCb()
const first_project_slideProps = useStore((state)=>state["Home"]["first_project_slide"]);
const first_project_slideIoProps = useIoStore((state)=>state["Home"]["first_project_slide"]);
const first_project_slideCb = usefirst_project_slideCb()
const w_dyn_listProps = useStore((state)=>state["Home"]["w_dyn_list"]);
const w_dyn_listIoProps = useIoStore((state)=>state["Home"]["w_dyn_list"]);
const w_dyn_listCb = usew_dyn_listCb()
const project_slide_link_blockProps = useStore((state)=>state["Home"]["project_slide_link_block"]);
const project_slide_link_blockIoProps = useIoStore((state)=>state["Home"]["project_slide_link_block"]);
const project_slide_link_blockCb = useproject_slide_link_blockCb()
const project_slide_image_wrapperProps = useStore((state)=>state["Home"]["project_slide_image_wrapper"]);
const project_slide_image_wrapperIoProps = useIoStore((state)=>state["Home"]["project_slide_image_wrapper"]);
const project_slide_image_wrapperCb = useproject_slide_image_wrapperCb()
const project_slide_contentProps = useStore((state)=>state["Home"]["project_slide_content"]);
const project_slide_contentIoProps = useIoStore((state)=>state["Home"]["project_slide_content"]);
const project_slide_contentCb = useproject_slide_contentCb()
const project_slide_tag_wrapperProps = useStore((state)=>state["Home"]["project_slide_tag_wrapper"]);
const project_slide_tag_wrapperIoProps = useIoStore((state)=>state["Home"]["project_slide_tag_wrapper"]);
const project_slide_tag_wrapperCb = useproject_slide_tag_wrapperCb()
const project_slide_main_headingProps = useStore((state)=>state["Home"]["project_slide_main_heading"]);
const project_slide_main_headingIoProps = useIoStore((state)=>state["Home"]["project_slide_main_heading"]);
const project_slide_main_headingCb = useproject_slide_main_headingCb()
const viwe_project_divProps = useStore((state)=>state["Home"]["viwe_project_div"]);
const viwe_project_divIoProps = useIoStore((state)=>state["Home"]["viwe_project_div"]);
const viwe_project_divCb = useviwe_project_divCb()
const view_project_arrowProps = useStore((state)=>state["Home"]["view_project_arrow"]);
const view_project_arrowIoProps = useIoStore((state)=>state["Home"]["view_project_arrow"]);
const view_project_arrowCb = useview_project_arrowCb()
const second_sliderProps = useStore((state)=>state["Home"]["second_slider"]);
const second_sliderIoProps = useIoStore((state)=>state["Home"]["second_slider"]);
const second_sliderCb = usesecond_sliderCb()
const second_project_slider_maskProps = useStore((state)=>state["Home"]["second_project_slider_mask"]);
const second_project_slider_maskIoProps = useIoStore((state)=>state["Home"]["second_project_slider_mask"]);
const second_project_slider_maskCb = usesecond_project_slider_maskCb()
const second_project_slideProps = useStore((state)=>state["Home"]["second_project_slide"]);
const second_project_slideIoProps = useIoStore((state)=>state["Home"]["second_project_slide"]);
const second_project_slideCb = usesecond_project_slideCb()
const second_w_dyn_listProps = useStore((state)=>state["Home"]["second_w_dyn_list"]);
const second_w_dyn_listIoProps = useIoStore((state)=>state["Home"]["second_w_dyn_list"]);
const second_w_dyn_listCb = usesecond_w_dyn_listCb()
const second_project_slide_link_blockProps = useStore((state)=>state["Home"]["second_project_slide_link_block"]);
const second_project_slide_link_blockIoProps = useIoStore((state)=>state["Home"]["second_project_slide_link_block"]);
const second_project_slide_link_blockCb = usesecond_project_slide_link_blockCb()
const second_project_slide_contentProps = useStore((state)=>state["Home"]["second_project_slide_content"]);
const second_project_slide_contentIoProps = useIoStore((state)=>state["Home"]["second_project_slide_content"]);
const second_project_slide_contentCb = usesecond_project_slide_contentCb()
const second_view_project_divProps = useStore((state)=>state["Home"]["second_view_project_div"]);
const second_view_project_divIoProps = useIoStore((state)=>state["Home"]["second_view_project_div"]);
const second_view_project_divCb = usesecond_view_project_divCb()
const second_view_project_arrowProps = useStore((state)=>state["Home"]["second_view_project_arrow"]);
const second_view_project_arrowIoProps = useIoStore((state)=>state["Home"]["second_view_project_arrow"]);
const second_view_project_arrowCb = usesecond_view_project_arrowCb()
const second_project_slide_main_headingProps = useStore((state)=>state["Home"]["second_project_slide_main_heading"]);
const second_project_slide_main_headingIoProps = useIoStore((state)=>state["Home"]["second_project_slide_main_heading"]);
const second_project_slide_main_headingCb = usesecond_project_slide_main_headingCb()
const second_project_tag_wrapperProps = useStore((state)=>state["Home"]["second_project_tag_wrapper"]);
const second_project_tag_wrapperIoProps = useIoStore((state)=>state["Home"]["second_project_tag_wrapper"]);
const second_project_tag_wrapperCb = usesecond_project_tag_wrapperCb()
const second_project_slide_image_wrapperProps = useStore((state)=>state["Home"]["second_project_slide_image_wrapper"]);
const second_project_slide_image_wrapperIoProps = useIoStore((state)=>state["Home"]["second_project_slide_image_wrapper"]);
const second_project_slide_image_wrapperCb = usesecond_project_slide_image_wrapperCb()
const project_slider_left_arrowProps = useStore((state)=>state["Home"]["project_slider_left_arrow"]);
const project_slider_left_arrowIoProps = useIoStore((state)=>state["Home"]["project_slider_left_arrow"]);
const project_slider_left_arrowCb = useproject_slider_left_arrowCb()
const project_arrow_left_arrow_icon_wrapperProps = useStore((state)=>state["Home"]["project_arrow_left_arrow_icon_wrapper"]);
const project_arrow_left_arrow_icon_wrapperIoProps = useIoStore((state)=>state["Home"]["project_arrow_left_arrow_icon_wrapper"]);
const project_arrow_left_arrow_icon_wrapperCb = useproject_arrow_left_arrow_icon_wrapperCb()
const project_slider_right_arrowProps = useStore((state)=>state["Home"]["project_slider_right_arrow"]);
const project_slider_right_arrowIoProps = useIoStore((state)=>state["Home"]["project_slider_right_arrow"]);
const project_slider_right_arrowCb = useproject_slider_right_arrowCb()
const project_arrow_right_icon_wrapperProps = useStore((state)=>state["Home"]["project_arrow_right_icon_wrapper"]);
const project_arrow_right_icon_wrapperIoProps = useIoStore((state)=>state["Home"]["project_arrow_right_icon_wrapper"]);
const project_arrow_right_icon_wrapperCb = useproject_arrow_right_icon_wrapperCb()
const FALSE_DIV_REJECTED_IGNOREProps = useStore((state)=>state["Home"]["FALSE_DIV_REJECTED_IGNORE"]);
const FALSE_DIV_REJECTED_IGNOREIoProps = useIoStore((state)=>state["Home"]["FALSE_DIV_REJECTED_IGNORE"]);
const FALSE_DIV_REJECTED_IGNORECb = useFALSE_DIV_REJECTED_IGNORECb()
const Div65Props = useStore((state)=>state["Home"]["Div65"]);
const Div65IoProps = useIoStore((state)=>state["Home"]["Div65"]);
const Div65Cb = useDiv65Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Div63Props = useStore((state)=>state["Home"]["Div63"]);
const Div63IoProps = useIoStore((state)=>state["Home"]["Div63"]);
const Div63Cb = useDiv63Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Div61Props = useStore((state)=>state["Home"]["Div61"]);
const Div61IoProps = useIoStore((state)=>state["Home"]["Div61"]);
const Div61Cb = useDiv61Cb()
const false_spareProps = useStore((state)=>state["Home"]["false_spare"]);
const false_spareIoProps = useIoStore((state)=>state["Home"]["false_spare"]);
const false_spareCb = usefalse_spareCb()
const Div184Props = useStore((state)=>state["Home"]["Div184"]);
const Div184IoProps = useIoStore((state)=>state["Home"]["Div184"]);
const Div184Cb = useDiv184Cb()
const blog_sectionProps = useStore((state)=>state["Home"]["blog_section"]);
const blog_sectionIoProps = useIoStore((state)=>state["Home"]["blog_section"]);
const blog_sectionCb = useblog_sectionCb()
const blog_homepage_wrapperProps = useStore((state)=>state["Home"]["blog_homepage_wrapper"]);
const blog_homepage_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_homepage_wrapper"]);
const blog_homepage_wrapperCb = useblog_homepage_wrapperCb()
const blog_heading_and_subtext_wrapperProps = useStore((state)=>state["Home"]["blog_heading_and_subtext_wrapper"]);
const blog_heading_and_subtext_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_heading_and_subtext_wrapper"]);
const blog_heading_and_subtext_wrapperCb = useblog_heading_and_subtext_wrapperCb()
const blog_item_read_the_article_wrapperProps = useStore((state)=>state["Home"]["blog_item_read_the_article_wrapper"]);
const blog_item_read_the_article_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_item_read_the_article_wrapper"]);
const blog_item_read_the_article_wrapperCb = useblog_item_read_the_article_wrapperCb()
const blog_item_read_the_article_text_wrapperProps = useStore((state)=>state["Home"]["blog_item_read_the_article_text_wrapper"]);
const blog_item_read_the_article_text_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_item_read_the_article_text_wrapper"]);
const blog_item_read_the_article_text_wrapperCb = useblog_item_read_the_article_text_wrapperCb()
const blog_item_arrow_wrapperProps = useStore((state)=>state["Home"]["blog_item_arrow_wrapper"]);
const blog_item_arrow_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_item_arrow_wrapper"]);
const blog_item_arrow_wrapperCb = useblog_item_arrow_wrapperCb()
const blog_subtext_mainProps = useStore((state)=>state["Home"]["blog_subtext_main"]);
const blog_subtext_mainIoProps = useIoStore((state)=>state["Home"]["blog_subtext_main"]);
const blog_subtext_mainCb = useblog_subtext_mainCb()
const blog_heading_wrapperProps = useStore((state)=>state["Home"]["blog_heading_wrapper"]);
const blog_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_heading_wrapper"]);
const blog_heading_wrapperCb = useblog_heading_wrapperCb()
const blog_content_wrapperProps = useStore((state)=>state["Home"]["blog_content_wrapper"]);
const blog_content_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_content_wrapper"]);
const blog_content_wrapperCb = useblog_content_wrapperCb()
const blog_dyn_item_firstProps = useStore((state)=>state["Home"]["blog_dyn_item_first"]);
const blog_dyn_item_firstIoProps = useIoStore((state)=>state["Home"]["blog_dyn_item_first"]);
const blog_dyn_item_firstCb = useblog_dyn_item_firstCb()
const blog_section_blog_item_firstProps = useStore((state)=>state["Home"]["blog_section_blog_item_first"]);
const blog_section_blog_item_firstIoProps = useIoStore((state)=>state["Home"]["blog_section_blog_item_first"]);
const blog_section_blog_item_firstCb = useblog_section_blog_item_firstCb()
const blog_item_date_and_time_wrapperProps = useStore((state)=>state["Home"]["blog_item_date_and_time_wrapper"]);
const blog_item_date_and_time_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_item_date_and_time_wrapper"]);
const blog_item_date_and_time_wrapperCb = useblog_item_date_and_time_wrapperCb()
const blog_item_date_wrapperProps = useStore((state)=>state["Home"]["blog_item_date_wrapper"]);
const blog_item_date_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_item_date_wrapper"]);
const blog_item_date_wrapperCb = useblog_item_date_wrapperCb()
const blog_item_time_wrapperProps = useStore((state)=>state["Home"]["blog_item_time_wrapper"]);
const blog_item_time_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_item_time_wrapper"]);
const blog_item_time_wrapperCb = useblog_item_time_wrapperCb()
const blog_item_heading_wrapperProps = useStore((state)=>state["Home"]["blog_item_heading_wrapper"]);
const blog_item_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_item_heading_wrapper"]);
const blog_item_heading_wrapperCb = useblog_item_heading_wrapperCb()
const blog_read_the_article_wrapperProps = useStore((state)=>state["Home"]["blog_read_the_article_wrapper"]);
const blog_read_the_article_wrapperIoProps = useIoStore((state)=>state["Home"]["blog_read_the_article_wrapper"]);
const blog_read_the_article_wrapperCb = useblog_read_the_article_wrapperCb()
const read_the_article_textProps = useStore((state)=>state["Home"]["read_the_article_text"]);
const read_the_article_textIoProps = useIoStore((state)=>state["Home"]["read_the_article_text"]);
const read_the_article_textCb = useread_the_article_textCb()
const read_article_white_arrowProps = useStore((state)=>state["Home"]["read_article_white_arrow"]);
const read_article_white_arrowIoProps = useIoStore((state)=>state["Home"]["read_article_white_arrow"]);
const read_article_white_arrowCb = useread_article_white_arrowCb()
const blog_dyn_second_itemProps = useStore((state)=>state["Home"]["blog_dyn_second_item"]);
const blog_dyn_second_itemIoProps = useIoStore((state)=>state["Home"]["blog_dyn_second_item"]);
const blog_dyn_second_itemCb = useblog_dyn_second_itemCb()
const blog_section_blog_item_secondProps = useStore((state)=>state["Home"]["blog_section_blog_item_second"]);
const blog_section_blog_item_secondIoProps = useIoStore((state)=>state["Home"]["blog_section_blog_item_second"]);
const blog_section_blog_item_secondCb = useblog_section_blog_item_secondCb()
const blog_read_the_article_secondProps = useStore((state)=>state["Home"]["blog_read_the_article_second"]);
const blog_read_the_article_secondIoProps = useIoStore((state)=>state["Home"]["blog_read_the_article_second"]);
const blog_read_the_article_secondCb = useblog_read_the_article_secondCb()
const read_article_white_arrow_secondProps = useStore((state)=>state["Home"]["read_article_white_arrow_second"]);
const read_article_white_arrow_secondIoProps = useIoStore((state)=>state["Home"]["read_article_white_arrow_second"]);
const read_article_white_arrow_secondCb = useread_article_white_arrow_secondCb()
const read_the_article_text_secondProps = useStore((state)=>state["Home"]["read_the_article_text_second"]);
const read_the_article_text_secondIoProps = useIoStore((state)=>state["Home"]["read_the_article_text_second"]);
const read_the_article_text_secondCb = useread_the_article_text_secondCb()
const blog_section_heading_wrapper_secondProps = useStore((state)=>state["Home"]["blog_section_heading_wrapper_second"]);
const blog_section_heading_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["blog_section_heading_wrapper_second"]);
const blog_section_heading_wrapper_secondCb = useblog_section_heading_wrapper_secondCb()
const blog_section_date_and_time_wrapper_secondProps = useStore((state)=>state["Home"]["blog_section_date_and_time_wrapper_second"]);
const blog_section_date_and_time_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["blog_section_date_and_time_wrapper_second"]);
const blog_section_date_and_time_wrapper_secondCb = useblog_section_date_and_time_wrapper_secondCb()
const blog_item_time_wrapper_secondProps = useStore((state)=>state["Home"]["blog_item_time_wrapper_second"]);
const blog_item_time_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["blog_item_time_wrapper_second"]);
const blog_item_time_wrapper_secondCb = useblog_item_time_wrapper_secondCb()
const blog_item_date_wrapper_secondProps = useStore((state)=>state["Home"]["blog_item_date_wrapper_second"]);
const blog_item_date_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["blog_item_date_wrapper_second"]);
const blog_item_date_wrapper_secondCb = useblog_item_date_wrapper_secondCb()
const blog_dyn_third_itemProps = useStore((state)=>state["Home"]["blog_dyn_third_item"]);
const blog_dyn_third_itemIoProps = useIoStore((state)=>state["Home"]["blog_dyn_third_item"]);
const blog_dyn_third_itemCb = useblog_dyn_third_itemCb()
const blog_section_blog_item_thirdProps = useStore((state)=>state["Home"]["blog_section_blog_item_third"]);
const blog_section_blog_item_thirdIoProps = useIoStore((state)=>state["Home"]["blog_section_blog_item_third"]);
const blog_section_blog_item_thirdCb = useblog_section_blog_item_thirdCb()
const blog_read_the_article_thirdProps = useStore((state)=>state["Home"]["blog_read_the_article_third"]);
const blog_read_the_article_thirdIoProps = useIoStore((state)=>state["Home"]["blog_read_the_article_third"]);
const blog_read_the_article_thirdCb = useblog_read_the_article_thirdCb()
const read_article_white_arrow_thirdProps = useStore((state)=>state["Home"]["read_article_white_arrow_third"]);
const read_article_white_arrow_thirdIoProps = useIoStore((state)=>state["Home"]["read_article_white_arrow_third"]);
const read_article_white_arrow_thirdCb = useread_article_white_arrow_thirdCb()
const read_the_article_text_thirdProps = useStore((state)=>state["Home"]["read_the_article_text_third"]);
const read_the_article_text_thirdIoProps = useIoStore((state)=>state["Home"]["read_the_article_text_third"]);
const read_the_article_text_thirdCb = useread_the_article_text_thirdCb()
const blog_section_heading_wrapper_thirdProps = useStore((state)=>state["Home"]["blog_section_heading_wrapper_third"]);
const blog_section_heading_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["blog_section_heading_wrapper_third"]);
const blog_section_heading_wrapper_thirdCb = useblog_section_heading_wrapper_thirdCb()
const blog_section_date_and_time_wrapper_thirdProps = useStore((state)=>state["Home"]["blog_section_date_and_time_wrapper_third"]);
const blog_section_date_and_time_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["blog_section_date_and_time_wrapper_third"]);
const blog_section_date_and_time_wrapper_thirdCb = useblog_section_date_and_time_wrapper_thirdCb()
const blog_item_time_wrapper_thirdProps = useStore((state)=>state["Home"]["blog_item_time_wrapper_third"]);
const blog_item_time_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["blog_item_time_wrapper_third"]);
const blog_item_time_wrapper_thirdCb = useblog_item_time_wrapper_thirdCb()
const blog_item_date_wrapper_thirdProps = useStore((state)=>state["Home"]["blog_item_date_wrapper_third"]);
const blog_item_date_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["blog_item_date_wrapper_third"]);
const blog_item_date_wrapper_thirdCb = useblog_item_date_wrapper_thirdCb()
const blog_dyn_fourth_itemProps = useStore((state)=>state["Home"]["blog_dyn_fourth_item"]);
const blog_dyn_fourth_itemIoProps = useIoStore((state)=>state["Home"]["blog_dyn_fourth_item"]);
const blog_dyn_fourth_itemCb = useblog_dyn_fourth_itemCb()
const blog_section_blog_item_fourthProps = useStore((state)=>state["Home"]["blog_section_blog_item_fourth"]);
const blog_section_blog_item_fourthIoProps = useIoStore((state)=>state["Home"]["blog_section_blog_item_fourth"]);
const blog_section_blog_item_fourthCb = useblog_section_blog_item_fourthCb()
const blog_read_the_article_fourthProps = useStore((state)=>state["Home"]["blog_read_the_article_fourth"]);
const blog_read_the_article_fourthIoProps = useIoStore((state)=>state["Home"]["blog_read_the_article_fourth"]);
const blog_read_the_article_fourthCb = useblog_read_the_article_fourthCb()
const read_article_white_arrow_fourthProps = useStore((state)=>state["Home"]["read_article_white_arrow_fourth"]);
const read_article_white_arrow_fourthIoProps = useIoStore((state)=>state["Home"]["read_article_white_arrow_fourth"]);
const read_article_white_arrow_fourthCb = useread_article_white_arrow_fourthCb()
const read_the_article_fourthProps = useStore((state)=>state["Home"]["read_the_article_fourth"]);
const read_the_article_fourthIoProps = useIoStore((state)=>state["Home"]["read_the_article_fourth"]);
const read_the_article_fourthCb = useread_the_article_fourthCb()
const blog_section_heading_wrapper_fourthProps = useStore((state)=>state["Home"]["blog_section_heading_wrapper_fourth"]);
const blog_section_heading_wrapper_fourthIoProps = useIoStore((state)=>state["Home"]["blog_section_heading_wrapper_fourth"]);
const blog_section_heading_wrapper_fourthCb = useblog_section_heading_wrapper_fourthCb()
const blog_section_date_and_time_wrapper_fourthProps = useStore((state)=>state["Home"]["blog_section_date_and_time_wrapper_fourth"]);
const blog_section_date_and_time_wrapper_fourthIoProps = useIoStore((state)=>state["Home"]["blog_section_date_and_time_wrapper_fourth"]);
const blog_section_date_and_time_wrapper_fourthCb = useblog_section_date_and_time_wrapper_fourthCb()
const blog_item_time_wrapper_fourthProps = useStore((state)=>state["Home"]["blog_item_time_wrapper_fourth"]);
const blog_item_time_wrapper_fourthIoProps = useIoStore((state)=>state["Home"]["blog_item_time_wrapper_fourth"]);
const blog_item_time_wrapper_fourthCb = useblog_item_time_wrapper_fourthCb()
const blog_item_date_wrapper_fourthProps = useStore((state)=>state["Home"]["blog_item_date_wrapper_fourth"]);
const blog_item_date_wrapper_fourthIoProps = useIoStore((state)=>state["Home"]["blog_item_date_wrapper_fourth"]);
const blog_item_date_wrapper_fourthCb = useblog_item_date_wrapper_fourthCb()
const blog_dyn_fifth_itemProps = useStore((state)=>state["Home"]["blog_dyn_fifth_item"]);
const blog_dyn_fifth_itemIoProps = useIoStore((state)=>state["Home"]["blog_dyn_fifth_item"]);
const blog_dyn_fifth_itemCb = useblog_dyn_fifth_itemCb()
const blog_section_blog_item_fifthProps = useStore((state)=>state["Home"]["blog_section_blog_item_fifth"]);
const blog_section_blog_item_fifthIoProps = useIoStore((state)=>state["Home"]["blog_section_blog_item_fifth"]);
const blog_section_blog_item_fifthCb = useblog_section_blog_item_fifthCb()
const blog_read_the_article_fifthProps = useStore((state)=>state["Home"]["blog_read_the_article_fifth"]);
const blog_read_the_article_fifthIoProps = useIoStore((state)=>state["Home"]["blog_read_the_article_fifth"]);
const blog_read_the_article_fifthCb = useblog_read_the_article_fifthCb()
const read_article_white_arrow_fifthProps = useStore((state)=>state["Home"]["read_article_white_arrow_fifth"]);
const read_article_white_arrow_fifthIoProps = useIoStore((state)=>state["Home"]["read_article_white_arrow_fifth"]);
const read_article_white_arrow_fifthCb = useread_article_white_arrow_fifthCb()
const read_the_article_fifthProps = useStore((state)=>state["Home"]["read_the_article_fifth"]);
const read_the_article_fifthIoProps = useIoStore((state)=>state["Home"]["read_the_article_fifth"]);
const read_the_article_fifthCb = useread_the_article_fifthCb()
const blog_section_heading_wrapper_fifthProps = useStore((state)=>state["Home"]["blog_section_heading_wrapper_fifth"]);
const blog_section_heading_wrapper_fifthIoProps = useIoStore((state)=>state["Home"]["blog_section_heading_wrapper_fifth"]);
const blog_section_heading_wrapper_fifthCb = useblog_section_heading_wrapper_fifthCb()
const blog_section_date_and_time_wrapper_fifthProps = useStore((state)=>state["Home"]["blog_section_date_and_time_wrapper_fifth"]);
const blog_section_date_and_time_wrapper_fifthIoProps = useIoStore((state)=>state["Home"]["blog_section_date_and_time_wrapper_fifth"]);
const blog_section_date_and_time_wrapper_fifthCb = useblog_section_date_and_time_wrapper_fifthCb()
const blog_item_time_wrapper_fifthProps = useStore((state)=>state["Home"]["blog_item_time_wrapper_fifth"]);
const blog_item_time_wrapper_fifthIoProps = useIoStore((state)=>state["Home"]["blog_item_time_wrapper_fifth"]);
const blog_item_time_wrapper_fifthCb = useblog_item_time_wrapper_fifthCb()
const blog_item_date_wrapper_fifthProps = useStore((state)=>state["Home"]["blog_item_date_wrapper_fifth"]);
const blog_item_date_wrapper_fifthIoProps = useIoStore((state)=>state["Home"]["blog_item_date_wrapper_fifth"]);
const blog_item_date_wrapper_fifthCb = useblog_item_date_wrapper_fifthCb()
const about_sectionProps = useStore((state)=>state["Home"]["about_section"]);
const about_sectionIoProps = useIoStore((state)=>state["Home"]["about_section"]);
const about_sectionCb = useabout_sectionCb()
const about_wrapperProps = useStore((state)=>state["Home"]["about_wrapper"]);
const about_wrapperIoProps = useIoStore((state)=>state["Home"]["about_wrapper"]);
const about_wrapperCb = useabout_wrapperCb()
const about_heading_and_subtext_wrapperProps = useStore((state)=>state["Home"]["about_heading_and_subtext_wrapper"]);
const about_heading_and_subtext_wrapperIoProps = useIoStore((state)=>state["Home"]["about_heading_and_subtext_wrapper"]);
const about_heading_and_subtext_wrapperCb = useabout_heading_and_subtext_wrapperCb()
const about_subtext_wrapperProps = useStore((state)=>state["Home"]["about_subtext_wrapper"]);
const about_subtext_wrapperIoProps = useIoStore((state)=>state["Home"]["about_subtext_wrapper"]);
const about_subtext_wrapperCb = useabout_subtext_wrapperCb()
const about_heading_wrapperProps = useStore((state)=>state["Home"]["about_heading_wrapper"]);
const about_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["about_heading_wrapper"]);
const about_heading_wrapperCb = useabout_heading_wrapperCb()
const about_content_wrapperProps = useStore((state)=>state["Home"]["about_content_wrapper"]);
const about_content_wrapperIoProps = useIoStore((state)=>state["Home"]["about_content_wrapper"]);
const about_content_wrapperCb = useabout_content_wrapperCb()
const lightboxProps = useStore((state)=>state["Home"]["lightbox"]);
const lightboxIoProps = useIoStore((state)=>state["Home"]["lightbox"]);
const lightboxCb = uselightboxCb()
const lightbox_second_image_wrapperProps = useStore((state)=>state["Home"]["lightbox_second_image_wrapper"]);
const lightbox_second_image_wrapperIoProps = useIoStore((state)=>state["Home"]["lightbox_second_image_wrapper"]);
const lightbox_second_image_wrapperCb = uselightbox_second_image_wrapperCb()
const ligthbox_first_image_wrapperProps = useStore((state)=>state["Home"]["ligthbox_first_image_wrapper"]);
const ligthbox_first_image_wrapperIoProps = useIoStore((state)=>state["Home"]["ligthbox_first_image_wrapper"]);
const ligthbox_first_image_wrapperCb = useligthbox_first_image_wrapperCb()
const lightbox_nexr_two_image_containerProps = useStore((state)=>state["Home"]["lightbox_nexr_two_image_container"]);
const lightbox_nexr_two_image_containerIoProps = useIoStore((state)=>state["Home"]["lightbox_nexr_two_image_container"]);
const lightbox_nexr_two_image_containerCb = uselightbox_nexr_two_image_containerCb()
const lightbox_third_image_wrapperProps = useStore((state)=>state["Home"]["lightbox_third_image_wrapper"]);
const lightbox_third_image_wrapperIoProps = useIoStore((state)=>state["Home"]["lightbox_third_image_wrapper"]);
const lightbox_third_image_wrapperCb = uselightbox_third_image_wrapperCb()
const lightbox_fourth_image_wrapperProps = useStore((state)=>state["Home"]["lightbox_fourth_image_wrapper"]);
const lightbox_fourth_image_wrapperIoProps = useIoStore((state)=>state["Home"]["lightbox_fourth_image_wrapper"]);
const lightbox_fourth_image_wrapperCb = uselightbox_fourth_image_wrapperCb()
const experience_sectionProps = useStore((state)=>state["Home"]["experience_section"]);
const experience_sectionIoProps = useIoStore((state)=>state["Home"]["experience_section"]);
const experience_sectionCb = useexperience_sectionCb()
const experience_wrapperProps = useStore((state)=>state["Home"]["experience_wrapper"]);
const experience_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_wrapper"]);
const experience_wrapperCb = useexperience_wrapperCb()
const experience_left_wrapperProps = useStore((state)=>state["Home"]["experience_left_wrapper"]);
const experience_left_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_left_wrapper"]);
const experience_left_wrapperCb = useexperience_left_wrapperCb()
const experience_heading_wrapperProps = useStore((state)=>state["Home"]["experience_heading_wrapper"]);
const experience_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_heading_wrapper"]);
const experience_heading_wrapperCb = useexperience_heading_wrapperCb()
const experience_item_containerProps = useStore((state)=>state["Home"]["experience_item_container"]);
const experience_item_containerIoProps = useIoStore((state)=>state["Home"]["experience_item_container"]);
const experience_item_containerCb = useexperience_item_containerCb()
const experience_item_wrapperProps = useStore((state)=>state["Home"]["experience_item_wrapper"]);
const experience_item_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_item_wrapper"]);
const experience_item_wrapperCb = useexperience_item_wrapperCb()
const experience_item_heading_and_subheading_wrapperProps = useStore((state)=>state["Home"]["experience_item_heading_and_subheading_wrapper"]);
const experience_item_heading_and_subheading_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_item_heading_and_subheading_wrapper"]);
const experience_item_heading_and_subheading_wrapperCb = useexperience_item_heading_and_subheading_wrapperCb()
const experience_item_heading_wrapperProps = useStore((state)=>state["Home"]["experience_item_heading_wrapper"]);
const experience_item_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_item_heading_wrapper"]);
const experience_item_heading_wrapperCb = useexperience_item_heading_wrapperCb()
const experience_item_subheading_wrapperProps = useStore((state)=>state["Home"]["experience_item_subheading_wrapper"]);
const experience_item_subheading_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_item_subheading_wrapper"]);
const experience_item_subheading_wrapperCb = useexperience_item_subheading_wrapperCb()
const experience_arrow_and_time_period_wrapperProps = useStore((state)=>state["Home"]["experience_arrow_and_time_period_wrapper"]);
const experience_arrow_and_time_period_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_arrow_and_time_period_wrapper"]);
const experience_arrow_and_time_period_wrapperCb = useexperience_arrow_and_time_period_wrapperCb()
const experience_time_period_wrapperProps = useStore((state)=>state["Home"]["experience_time_period_wrapper"]);
const experience_time_period_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_time_period_wrapper"]);
const experience_time_period_wrapperCb = useexperience_time_period_wrapperCb()
const experience_arrow_wrapperProps = useStore((state)=>state["Home"]["experience_arrow_wrapper"]);
const experience_arrow_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_arrow_wrapper"]);
const experience_arrow_wrapperCb = useexperience_arrow_wrapperCb()
const experience_item_wrapper_secondProps = useStore((state)=>state["Home"]["experience_item_wrapper_second"]);
const experience_item_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["experience_item_wrapper_second"]);
const experience_item_wrapper_secondCb = useexperience_item_wrapper_secondCb()
const experience_arrow_and_time_period_wrapper_secondProps = useStore((state)=>state["Home"]["experience_arrow_and_time_period_wrapper_second"]);
const experience_arrow_and_time_period_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["experience_arrow_and_time_period_wrapper_second"]);
const experience_arrow_and_time_period_wrapper_secondCb = useexperience_arrow_and_time_period_wrapper_secondCb()
const experience_arrow_wrapper_secondProps = useStore((state)=>state["Home"]["experience_arrow_wrapper_second"]);
const experience_arrow_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["experience_arrow_wrapper_second"]);
const experience_arrow_wrapper_secondCb = useexperience_arrow_wrapper_secondCb()
const experience_time_period_wrapper_secondProps = useStore((state)=>state["Home"]["experience_time_period_wrapper_second"]);
const experience_time_period_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["experience_time_period_wrapper_second"]);
const experience_time_period_wrapper_secondCb = useexperience_time_period_wrapper_secondCb()
const experience_item_heading_and_subheading_wrapper_secondProps = useStore((state)=>state["Home"]["experience_item_heading_and_subheading_wrapper_second"]);
const experience_item_heading_and_subheading_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["experience_item_heading_and_subheading_wrapper_second"]);
const experience_item_heading_and_subheading_wrapper_secondCb = useexperience_item_heading_and_subheading_wrapper_secondCb()
const experience_item_subheading_wrapper_secondProps = useStore((state)=>state["Home"]["experience_item_subheading_wrapper_second"]);
const experience_item_subheading_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["experience_item_subheading_wrapper_second"]);
const experience_item_subheading_wrapper_secondCb = useexperience_item_subheading_wrapper_secondCb()
const experience_item_heading_wrapper_secondProps = useStore((state)=>state["Home"]["experience_item_heading_wrapper_second"]);
const experience_item_heading_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["experience_item_heading_wrapper_second"]);
const experience_item_heading_wrapper_secondCb = useexperience_item_heading_wrapper_secondCb()
const experience_item_wrapper_thirdProps = useStore((state)=>state["Home"]["experience_item_wrapper_third"]);
const experience_item_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["experience_item_wrapper_third"]);
const experience_item_wrapper_thirdCb = useexperience_item_wrapper_thirdCb()
const experience_arrow_and_time_period_wrapper_thirdProps = useStore((state)=>state["Home"]["experience_arrow_and_time_period_wrapper_third"]);
const experience_arrow_and_time_period_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["experience_arrow_and_time_period_wrapper_third"]);
const experience_arrow_and_time_period_wrapper_thirdCb = useexperience_arrow_and_time_period_wrapper_thirdCb()
const experience_arrow_wrapper_thirdProps = useStore((state)=>state["Home"]["experience_arrow_wrapper_third"]);
const experience_arrow_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["experience_arrow_wrapper_third"]);
const experience_arrow_wrapper_thirdCb = useexperience_arrow_wrapper_thirdCb()
const experience_time_period_wrapper_thirdProps = useStore((state)=>state["Home"]["experience_time_period_wrapper_third"]);
const experience_time_period_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["experience_time_period_wrapper_third"]);
const experience_time_period_wrapper_thirdCb = useexperience_time_period_wrapper_thirdCb()
const experience_item_heading_and_subheading_wrapper_thirdProps = useStore((state)=>state["Home"]["experience_item_heading_and_subheading_wrapper_third"]);
const experience_item_heading_and_subheading_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["experience_item_heading_and_subheading_wrapper_third"]);
const experience_item_heading_and_subheading_wrapper_thirdCb = useexperience_item_heading_and_subheading_wrapper_thirdCb()
const experience_item_subheading_wrapper_thirdProps = useStore((state)=>state["Home"]["experience_item_subheading_wrapper_third"]);
const experience_item_subheading_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["experience_item_subheading_wrapper_third"]);
const experience_item_subheading_wrapper_thirdCb = useexperience_item_subheading_wrapper_thirdCb()
const experience_item_heading_wrapper_thirdProps = useStore((state)=>state["Home"]["experience_item_heading_wrapper_third"]);
const experience_item_heading_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["experience_item_heading_wrapper_third"]);
const experience_item_heading_wrapper_thirdCb = useexperience_item_heading_wrapper_thirdCb()
const experience_right_wrapperProps = useStore((state)=>state["Home"]["experience_right_wrapper"]);
const experience_right_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_wrapper"]);
const experience_right_wrapperCb = useexperience_right_wrapperCb()
const experience_right_item_containerProps = useStore((state)=>state["Home"]["experience_right_item_container"]);
const experience_right_item_containerIoProps = useIoStore((state)=>state["Home"]["experience_right_item_container"]);
const experience_right_item_containerCb = useexperience_right_item_containerCb()
const experience_right_third_item_wrapperProps = useStore((state)=>state["Home"]["experience_right_third_item_wrapper"]);
const experience_right_third_item_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_third_item_wrapper"]);
const experience_right_third_item_wrapperCb = useexperience_right_third_item_wrapperCb()
const experience_right_item_heading_and_subheading_third_wrapperProps = useStore((state)=>state["Home"]["experience_right_item_heading_and_subheading_third_wrapper"]);
const experience_right_item_heading_and_subheading_third_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_item_heading_and_subheading_third_wrapper"]);
const experience_right_item_heading_and_subheading_third_wrapperCb = useexperience_right_item_heading_and_subheading_third_wrapperCb()
const experience_right_item_heading_third_wrapperProps = useStore((state)=>state["Home"]["experience_right_item_heading_third_wrapper"]);
const experience_right_item_heading_third_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_item_heading_third_wrapper"]);
const experience_right_item_heading_third_wrapperCb = useexperience_right_item_heading_third_wrapperCb()
const experience_right_item_subheading_third_wrapperProps = useStore((state)=>state["Home"]["experience_right_item_subheading_third_wrapper"]);
const experience_right_item_subheading_third_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_item_subheading_third_wrapper"]);
const experience_right_item_subheading_third_wrapperCb = useexperience_right_item_subheading_third_wrapperCb()
const experience_right_arrow_and_time_period_third_wrapperProps = useStore((state)=>state["Home"]["experience_right_arrow_and_time_period_third_wrapper"]);
const experience_right_arrow_and_time_period_third_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_arrow_and_time_period_third_wrapper"]);
const experience_right_arrow_and_time_period_third_wrapperCb = useexperience_right_arrow_and_time_period_third_wrapperCb()
const experience_right_time_period_third_wrapperProps = useStore((state)=>state["Home"]["experience_right_time_period_third_wrapper"]);
const experience_right_time_period_third_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_time_period_third_wrapper"]);
const experience_right_time_period_third_wrapperCb = useexperience_right_time_period_third_wrapperCb()
const experience_right_arrow_third_wrapperProps = useStore((state)=>state["Home"]["experience_right_arrow_third_wrapper"]);
const experience_right_arrow_third_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_arrow_third_wrapper"]);
const experience_right_arrow_third_wrapperCb = useexperience_right_arrow_third_wrapperCb()
const experience_right_second_item_wrapperProps = useStore((state)=>state["Home"]["experience_right_second_item_wrapper"]);
const experience_right_second_item_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_second_item_wrapper"]);
const experience_right_second_item_wrapperCb = useexperience_right_second_item_wrapperCb()
const experience_right_item_heading_and_subheading_second_wrapperProps = useStore((state)=>state["Home"]["experience_right_item_heading_and_subheading_second_wrapper"]);
const experience_right_item_heading_and_subheading_second_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_item_heading_and_subheading_second_wrapper"]);
const experience_right_item_heading_and_subheading_second_wrapperCb = useexperience_right_item_heading_and_subheading_second_wrapperCb()
const experience_right_item_second_heading_wrapperProps = useStore((state)=>state["Home"]["experience_right_item_second_heading_wrapper"]);
const experience_right_item_second_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_item_second_heading_wrapper"]);
const experience_right_item_second_heading_wrapperCb = useexperience_right_item_second_heading_wrapperCb()
const experience_right_item_subheading_second_wrapperProps = useStore((state)=>state["Home"]["experience_right_item_subheading_second_wrapper"]);
const experience_right_item_subheading_second_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_item_subheading_second_wrapper"]);
const experience_right_item_subheading_second_wrapperCb = useexperience_right_item_subheading_second_wrapperCb()
const experience_right_arrow_and_time_period_second_wrapperProps = useStore((state)=>state["Home"]["experience_right_arrow_and_time_period_second_wrapper"]);
const experience_right_arrow_and_time_period_second_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_arrow_and_time_period_second_wrapper"]);
const experience_right_arrow_and_time_period_second_wrapperCb = useexperience_right_arrow_and_time_period_second_wrapperCb()
const experience_right_time_period_second_wrapperProps = useStore((state)=>state["Home"]["experience_right_time_period_second_wrapper"]);
const experience_right_time_period_second_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_time_period_second_wrapper"]);
const experience_right_time_period_second_wrapperCb = useexperience_right_time_period_second_wrapperCb()
const experience_right_arrow_second_wrapperProps = useStore((state)=>state["Home"]["experience_right_arrow_second_wrapper"]);
const experience_right_arrow_second_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_arrow_second_wrapper"]);
const experience_right_arrow_second_wrapperCb = useexperience_right_arrow_second_wrapperCb()
const experience_right_first_item_wrapperProps = useStore((state)=>state["Home"]["experience_right_first_item_wrapper"]);
const experience_right_first_item_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_first_item_wrapper"]);
const experience_right_first_item_wrapperCb = useexperience_right_first_item_wrapperCb()
const experience_right_arrow_and_time_period_first_wrapperProps = useStore((state)=>state["Home"]["experience_right_arrow_and_time_period_first_wrapper"]);
const experience_right_arrow_and_time_period_first_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_arrow_and_time_period_first_wrapper"]);
const experience_right_arrow_and_time_period_first_wrapperCb = useexperience_right_arrow_and_time_period_first_wrapperCb()
const experience_right_arrow_wrapperProps = useStore((state)=>state["Home"]["experience_right_arrow_wrapper"]);
const experience_right_arrow_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_arrow_wrapper"]);
const experience_right_arrow_wrapperCb = useexperience_right_arrow_wrapperCb()
const experience_right_time_period_wrapperProps = useStore((state)=>state["Home"]["experience_right_time_period_wrapper"]);
const experience_right_time_period_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_time_period_wrapper"]);
const experience_right_time_period_wrapperCb = useexperience_right_time_period_wrapperCb()
const experience_right_item_heading_and_subheading_first_wrapperProps = useStore((state)=>state["Home"]["experience_right_item_heading_and_subheading_first_wrapper"]);
const experience_right_item_heading_and_subheading_first_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_item_heading_and_subheading_first_wrapper"]);
const experience_right_item_heading_and_subheading_first_wrapperCb = useexperience_right_item_heading_and_subheading_first_wrapperCb()
const experience_right_item_subheading_wrapperProps = useStore((state)=>state["Home"]["experience_right_item_subheading_wrapper"]);
const experience_right_item_subheading_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_item_subheading_wrapper"]);
const experience_right_item_subheading_wrapperCb = useexperience_right_item_subheading_wrapperCb()
const experience_right_item_heading_wrapperProps = useStore((state)=>state["Home"]["experience_right_item_heading_wrapper"]);
const experience_right_item_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_item_heading_wrapper"]);
const experience_right_item_heading_wrapperCb = useexperience_right_item_heading_wrapperCb()
const experience_right_heading_wrapperProps = useStore((state)=>state["Home"]["experience_right_heading_wrapper"]);
const experience_right_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_heading_wrapper"]);
const experience_right_heading_wrapperCb = useexperience_right_heading_wrapperCb()
const testimonial_sectionProps = useStore((state)=>state["Home"]["testimonial_section"]);
const testimonial_sectionIoProps = useIoStore((state)=>state["Home"]["testimonial_section"]);
const testimonial_sectionCb = usetestimonial_sectionCb()
const testimonial_headings_wrapperProps = useStore((state)=>state["Home"]["testimonial_headings_wrapper"]);
const testimonial_headings_wrapperIoProps = useIoStore((state)=>state["Home"]["testimonial_headings_wrapper"]);
const testimonial_headings_wrapperCb = usetestimonial_headings_wrapperCb()
const testimonial_heading_subtext_wrapperProps = useStore((state)=>state["Home"]["testimonial_heading_subtext_wrapper"]);
const testimonial_heading_subtext_wrapperIoProps = useIoStore((state)=>state["Home"]["testimonial_heading_subtext_wrapper"]);
const testimonial_heading_subtext_wrapperCb = usetestimonial_heading_subtext_wrapperCb()
const testimonial_heading_wrapperProps = useStore((state)=>state["Home"]["testimonial_heading_wrapper"]);
const testimonial_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["testimonial_heading_wrapper"]);
const testimonial_heading_wrapperCb = usetestimonial_heading_wrapperCb()
const testimonial_down_wrapperProps = useStore((state)=>state["Home"]["testimonial_down_wrapper"]);
const testimonial_down_wrapperIoProps = useIoStore((state)=>state["Home"]["testimonial_down_wrapper"]);
const testimonial_down_wrapperCb = usetestimonial_down_wrapperCb()
const testimonial_sliderProps = useStore((state)=>state["Home"]["testimonial_slider"]);
const testimonial_sliderIoProps = useIoStore((state)=>state["Home"]["testimonial_slider"]);
const testimonial_sliderCb = usetestimonial_sliderCb()
const testimonial_containerProps = useStore((state)=>state["Home"]["testimonial_container"]);
const testimonial_containerIoProps = useIoStore((state)=>state["Home"]["testimonial_container"]);
const testimonial_containerCb = usetestimonial_containerCb()
const testimonial_image_wrapperProps = useStore((state)=>state["Home"]["testimonial_image_wrapper"]);
const testimonial_image_wrapperIoProps = useIoStore((state)=>state["Home"]["testimonial_image_wrapper"]);
const testimonial_image_wrapperCb = usetestimonial_image_wrapperCb()
const testimonial_contentProps = useStore((state)=>state["Home"]["testimonial_content"]);
const testimonial_contentIoProps = useIoStore((state)=>state["Home"]["testimonial_content"]);
const testimonial_contentCb = usetestimonial_contentCb()
const testimonial_quote_item_wrapperProps = useStore((state)=>state["Home"]["testimonial_quote_item_wrapper"]);
const testimonial_quote_item_wrapperIoProps = useIoStore((state)=>state["Home"]["testimonial_quote_item_wrapper"]);
const testimonial_quote_item_wrapperCb = usetestimonial_quote_item_wrapperCb()
const testimonial_content_wrapperProps = useStore((state)=>state["Home"]["testimonial_content_wrapper"]);
const testimonial_content_wrapperIoProps = useIoStore((state)=>state["Home"]["testimonial_content_wrapper"]);
const testimonial_content_wrapperCb = usetestimonial_content_wrapperCb()
const testimonial_name_and_position_wrapperProps = useStore((state)=>state["Home"]["testimonial_name_and_position_wrapper"]);
const testimonial_name_and_position_wrapperIoProps = useIoStore((state)=>state["Home"]["testimonial_name_and_position_wrapper"]);
const testimonial_name_and_position_wrapperCb = usetestimonial_name_and_position_wrapperCb()
const testimonial_name_wrapperProps = useStore((state)=>state["Home"]["testimonial_name_wrapper"]);
const testimonial_name_wrapperIoProps = useIoStore((state)=>state["Home"]["testimonial_name_wrapper"]);
const testimonial_name_wrapperCb = usetestimonial_name_wrapperCb()
const testimonial_nameProps = useStore((state)=>state["Home"]["testimonial_name"]);
const testimonial_nameIoProps = useIoStore((state)=>state["Home"]["testimonial_name"]);
const testimonial_nameCb = usetestimonial_nameCb()
const testimonial_descProps = useStore((state)=>state["Home"]["testimonial_desc"]);
const testimonial_descIoProps = useIoStore((state)=>state["Home"]["testimonial_desc"]);
const testimonial_descCb = usetestimonial_descCb()
const testimonial_left_arrowProps = useStore((state)=>state["Home"]["testimonial_left_arrow"]);
const testimonial_left_arrowIoProps = useIoStore((state)=>state["Home"]["testimonial_left_arrow"]);
const testimonial_left_arrowCb = usetestimonial_left_arrowCb()
const testimonial_left_arrow_icon_wrapperProps = useStore((state)=>state["Home"]["testimonial_left_arrow_icon_wrapper"]);
const testimonial_left_arrow_icon_wrapperIoProps = useIoStore((state)=>state["Home"]["testimonial_left_arrow_icon_wrapper"]);
const testimonial_left_arrow_icon_wrapperCb = usetestimonial_left_arrow_icon_wrapperCb()
const testimonial_right_arrowProps = useStore((state)=>state["Home"]["testimonial_right_arrow"]);
const testimonial_right_arrowIoProps = useIoStore((state)=>state["Home"]["testimonial_right_arrow"]);
const testimonial_right_arrowCb = usetestimonial_right_arrowCb()
const testimonial_right_arrow_icon_wrapperProps = useStore((state)=>state["Home"]["testimonial_right_arrow_icon_wrapper"]);
const testimonial_right_arrow_icon_wrapperIoProps = useIoStore((state)=>state["Home"]["testimonial_right_arrow_icon_wrapper"]);
const testimonial_right_arrow_icon_wrapperCb = usetestimonial_right_arrow_icon_wrapperCb()
const faq_sectionProps = useStore((state)=>state["Home"]["faq_section"]);
const faq_sectionIoProps = useIoStore((state)=>state["Home"]["faq_section"]);
const faq_sectionCb = usefaq_sectionCb()
const faq_headerProps = useStore((state)=>state["Home"]["faq_header"]);
const faq_headerIoProps = useIoStore((state)=>state["Home"]["faq_header"]);
const faq_headerCb = usefaq_headerCb()
const faq_subtext_wrapperProps = useStore((state)=>state["Home"]["faq_subtext_wrapper"]);
const faq_subtext_wrapperIoProps = useIoStore((state)=>state["Home"]["faq_subtext_wrapper"]);
const faq_subtext_wrapperCb = usefaq_subtext_wrapperCb()
const faq_heading_wrapperProps = useStore((state)=>state["Home"]["faq_heading_wrapper"]);
const faq_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["faq_heading_wrapper"]);
const faq_heading_wrapperCb = usefaq_heading_wrapperCb()
const faq_downProps = useStore((state)=>state["Home"]["faq_down"]);
const faq_downIoProps = useIoStore((state)=>state["Home"]["faq_down"]);
const faq_downCb = usefaq_downCb()
const faq_containerProps = useStore((state)=>state["Home"]["faq_container"]);
const faq_containerIoProps = useIoStore((state)=>state["Home"]["faq_container"]);
const faq_containerCb = usefaq_containerCb()
const faq_leftProps = useStore((state)=>state["Home"]["faq_left"]);
const faq_leftIoProps = useIoStore((state)=>state["Home"]["faq_left"]);
const faq_leftCb = usefaq_leftCb()
const faq_item_firstProps = useStore((state)=>state["Home"]["faq_item_first"]);
const faq_item_firstIoProps = useIoStore((state)=>state["Home"]["faq_item_first"]);
const faq_item_firstCb = usefaq_item_firstCb()
const faq_question_and_arrow_wrapperProps = useStore((state)=>state["Home"]["faq_question_and_arrow_wrapper"]);
const faq_question_and_arrow_wrapperIoProps = useIoStore((state)=>state["Home"]["faq_question_and_arrow_wrapper"]);
const faq_question_and_arrow_wrapperCb = usefaq_question_and_arrow_wrapperCb()
const faq_question_wrapperProps = useStore((state)=>state["Home"]["faq_question_wrapper"]);
const faq_question_wrapperIoProps = useIoStore((state)=>state["Home"]["faq_question_wrapper"]);
const faq_question_wrapperCb = usefaq_question_wrapperCb()
const faq_icon_wrapperProps = useStore((state)=>state["Home"]["faq_icon_wrapper"]);
const faq_icon_wrapperIoProps = useIoStore((state)=>state["Home"]["faq_icon_wrapper"]);
const faq_icon_wrapperCb = usefaq_icon_wrapperCb()
const faq_item_secondProps = useStore((state)=>state["Home"]["faq_item_second"]);
const faq_item_secondIoProps = useIoStore((state)=>state["Home"]["faq_item_second"]);
const faq_item_secondCb = usefaq_item_secondCb()
const faq_question_and_arrow_wrapper_secondProps = useStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_second"]);
const faq_question_and_arrow_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_second"]);
const faq_question_and_arrow_wrapper_secondCb = usefaq_question_and_arrow_wrapper_secondCb()
const faq_icon_wrapper_secondProps = useStore((state)=>state["Home"]["faq_icon_wrapper_second"]);
const faq_icon_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["faq_icon_wrapper_second"]);
const faq_icon_wrapper_secondCb = usefaq_icon_wrapper_secondCb()
const faq_question_wrapper_secondProps = useStore((state)=>state["Home"]["faq_question_wrapper_second"]);
const faq_question_wrapper_secondIoProps = useIoStore((state)=>state["Home"]["faq_question_wrapper_second"]);
const faq_question_wrapper_secondCb = usefaq_question_wrapper_secondCb()
const faq_item_thirdProps = useStore((state)=>state["Home"]["faq_item_third"]);
const faq_item_thirdIoProps = useIoStore((state)=>state["Home"]["faq_item_third"]);
const faq_item_thirdCb = usefaq_item_thirdCb()
const faq_question_and_arrow_wrapper_thirdProps = useStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_third"]);
const faq_question_and_arrow_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_third"]);
const faq_question_and_arrow_wrapper_thirdCb = usefaq_question_and_arrow_wrapper_thirdCb()
const faq_icon_wrapper_thirdProps = useStore((state)=>state["Home"]["faq_icon_wrapper_third"]);
const faq_icon_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["faq_icon_wrapper_third"]);
const faq_icon_wrapper_thirdCb = usefaq_icon_wrapper_thirdCb()
const faq_question_wrapper_thirdProps = useStore((state)=>state["Home"]["faq_question_wrapper_third"]);
const faq_question_wrapper_thirdIoProps = useIoStore((state)=>state["Home"]["faq_question_wrapper_third"]);
const faq_question_wrapper_thirdCb = usefaq_question_wrapper_thirdCb()
const faq_item_fourthProps = useStore((state)=>state["Home"]["faq_item_fourth"]);
const faq_item_fourthIoProps = useIoStore((state)=>state["Home"]["faq_item_fourth"]);
const faq_item_fourthCb = usefaq_item_fourthCb()
const faq_question_and_arrow_wrapper_fourthProps = useStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_fourth"]);
const faq_question_and_arrow_wrapper_fourthIoProps = useIoStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_fourth"]);
const faq_question_and_arrow_wrapper_fourthCb = usefaq_question_and_arrow_wrapper_fourthCb()
const faq_icon_wrapper_fourthProps = useStore((state)=>state["Home"]["faq_icon_wrapper_fourth"]);
const faq_icon_wrapper_fourthIoProps = useIoStore((state)=>state["Home"]["faq_icon_wrapper_fourth"]);
const faq_icon_wrapper_fourthCb = usefaq_icon_wrapper_fourthCb()
const faq_question_wrapper_fourthProps = useStore((state)=>state["Home"]["faq_question_wrapper_fourth"]);
const faq_question_wrapper_fourthIoProps = useIoStore((state)=>state["Home"]["faq_question_wrapper_fourth"]);
const faq_question_wrapper_fourthCb = usefaq_question_wrapper_fourthCb()
const faq_rightProps = useStore((state)=>state["Home"]["faq_right"]);
const faq_rightIoProps = useIoStore((state)=>state["Home"]["faq_right"]);
const faq_rightCb = usefaq_rightCb()
const faq_right_item_fourthProps = useStore((state)=>state["Home"]["faq_right_item_fourth"]);
const faq_right_item_fourthIoProps = useIoStore((state)=>state["Home"]["faq_right_item_fourth"]);
const faq_right_item_fourthCb = usefaq_right_item_fourthCb()
const faq_question_and_arrow_wrapper_right_fourthProps = useStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_right_fourth"]);
const faq_question_and_arrow_wrapper_right_fourthIoProps = useIoStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_right_fourth"]);
const faq_question_and_arrow_wrapper_right_fourthCb = usefaq_question_and_arrow_wrapper_right_fourthCb()
const faq_question_wrapper_right_fourthProps = useStore((state)=>state["Home"]["faq_question_wrapper_right_fourth"]);
const faq_question_wrapper_right_fourthIoProps = useIoStore((state)=>state["Home"]["faq_question_wrapper_right_fourth"]);
const faq_question_wrapper_right_fourthCb = usefaq_question_wrapper_right_fourthCb()
const faq_icon_wrapper_right_fourthProps = useStore((state)=>state["Home"]["faq_icon_wrapper_right_fourth"]);
const faq_icon_wrapper_right_fourthIoProps = useIoStore((state)=>state["Home"]["faq_icon_wrapper_right_fourth"]);
const faq_icon_wrapper_right_fourthCb = usefaq_icon_wrapper_right_fourthCb()
const faq_right_item_thirdProps = useStore((state)=>state["Home"]["faq_right_item_third"]);
const faq_right_item_thirdIoProps = useIoStore((state)=>state["Home"]["faq_right_item_third"]);
const faq_right_item_thirdCb = usefaq_right_item_thirdCb()
const faq_question_and_arrow_wrapper_right_thirdProps = useStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_right_third"]);
const faq_question_and_arrow_wrapper_right_thirdIoProps = useIoStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_right_third"]);
const faq_question_and_arrow_wrapper_right_thirdCb = usefaq_question_and_arrow_wrapper_right_thirdCb()
const faq_question_wrapper_right_thirdProps = useStore((state)=>state["Home"]["faq_question_wrapper_right_third"]);
const faq_question_wrapper_right_thirdIoProps = useIoStore((state)=>state["Home"]["faq_question_wrapper_right_third"]);
const faq_question_wrapper_right_thirdCb = usefaq_question_wrapper_right_thirdCb()
const faq_icon_wrapper_right_thirdProps = useStore((state)=>state["Home"]["faq_icon_wrapper_right_third"]);
const faq_icon_wrapper_right_thirdIoProps = useIoStore((state)=>state["Home"]["faq_icon_wrapper_right_third"]);
const faq_icon_wrapper_right_thirdCb = usefaq_icon_wrapper_right_thirdCb()
const faq_right_item_secondProps = useStore((state)=>state["Home"]["faq_right_item_second"]);
const faq_right_item_secondIoProps = useIoStore((state)=>state["Home"]["faq_right_item_second"]);
const faq_right_item_secondCb = usefaq_right_item_secondCb()
const faq_question_and_arrow_wrapper_right_secondProps = useStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_right_second"]);
const faq_question_and_arrow_wrapper_right_secondIoProps = useIoStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_right_second"]);
const faq_question_and_arrow_wrapper_right_secondCb = usefaq_question_and_arrow_wrapper_right_secondCb()
const faq_question_wrapper_right_secondProps = useStore((state)=>state["Home"]["faq_question_wrapper_right_second"]);
const faq_question_wrapper_right_secondIoProps = useIoStore((state)=>state["Home"]["faq_question_wrapper_right_second"]);
const faq_question_wrapper_right_secondCb = usefaq_question_wrapper_right_secondCb()
const faq_icon_wrapper_right_secondProps = useStore((state)=>state["Home"]["faq_icon_wrapper_right_second"]);
const faq_icon_wrapper_right_secondIoProps = useIoStore((state)=>state["Home"]["faq_icon_wrapper_right_second"]);
const faq_icon_wrapper_right_secondCb = usefaq_icon_wrapper_right_secondCb()
const faq_right_item_firstProps = useStore((state)=>state["Home"]["faq_right_item_first"]);
const faq_right_item_firstIoProps = useIoStore((state)=>state["Home"]["faq_right_item_first"]);
const faq_right_item_firstCb = usefaq_right_item_firstCb()
const faq_question_and_arrow_wrapper_right_firstProps = useStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_right_first"]);
const faq_question_and_arrow_wrapper_right_firstIoProps = useIoStore((state)=>state["Home"]["faq_question_and_arrow_wrapper_right_first"]);
const faq_question_and_arrow_wrapper_right_firstCb = usefaq_question_and_arrow_wrapper_right_firstCb()
const faq_icon_wrapper_right_firstProps = useStore((state)=>state["Home"]["faq_icon_wrapper_right_first"]);
const faq_icon_wrapper_right_firstIoProps = useIoStore((state)=>state["Home"]["faq_icon_wrapper_right_first"]);
const faq_icon_wrapper_right_firstCb = usefaq_icon_wrapper_right_firstCb()
const faq_question_wrapper_right_firstProps = useStore((state)=>state["Home"]["faq_question_wrapper_right_first"]);
const faq_question_wrapper_right_firstIoProps = useIoStore((state)=>state["Home"]["faq_question_wrapper_right_first"]);
const faq_question_wrapper_right_firstCb = usefaq_question_wrapper_right_firstCb()
const footer_sectionProps = useStore((state)=>state["Home"]["footer_section"]);
const footer_sectionIoProps = useIoStore((state)=>state["Home"]["footer_section"]);
const footer_sectionCb = usefooter_sectionCb()
const footer_wrapperProps = useStore((state)=>state["Home"]["footer_wrapper"]);
const footer_wrapperIoProps = useIoStore((state)=>state["Home"]["footer_wrapper"]);
const footer_wrapperCb = usefooter_wrapperCb()
const footer_heading_wrapperProps = useStore((state)=>state["Home"]["footer_heading_wrapper"]);
const footer_heading_wrapperIoProps = useIoStore((state)=>state["Home"]["footer_heading_wrapper"]);
const footer_heading_wrapperCb = usefooter_heading_wrapperCb()
const footer_ctaProps = useStore((state)=>state["Home"]["footer_cta"]);
const footer_ctaIoProps = useIoStore((state)=>state["Home"]["footer_cta"]);
const footer_ctaCb = usefooter_ctaCb()
const footer_address_and_link_wrapperProps = useStore((state)=>state["Home"]["footer_address_and_link_wrapper"]);
const footer_address_and_link_wrapperIoProps = useIoStore((state)=>state["Home"]["footer_address_and_link_wrapper"]);
const footer_address_and_link_wrapperCb = usefooter_address_and_link_wrapperCb()
const footer_address_wrapperProps = useStore((state)=>state["Home"]["footer_address_wrapper"]);
const footer_address_wrapperIoProps = useIoStore((state)=>state["Home"]["footer_address_wrapper"]);
const footer_address_wrapperCb = usefooter_address_wrapperCb()
const footer_logo_wrapProps = useStore((state)=>state["Home"]["footer_logo_wrap"]);
const footer_logo_wrapIoProps = useIoStore((state)=>state["Home"]["footer_logo_wrap"]);
const footer_logo_wrapCb = usefooter_logo_wrapCb()
const contact_email_footerProps = useStore((state)=>state["Home"]["contact_email_footer"]);
const contact_email_footerIoProps = useIoStore((state)=>state["Home"]["contact_email_footer"]);
const contact_email_footerCb = usecontact_email_footerCb()
const email_image_footer_wrapperProps = useStore((state)=>state["Home"]["email_image_footer_wrapper"]);
const email_image_footer_wrapperIoProps = useIoStore((state)=>state["Home"]["email_image_footer_wrapper"]);
const email_image_footer_wrapperCb = useemail_image_footer_wrapperCb()
const footer_linksProps = useStore((state)=>state["Home"]["footer_links"]);
const footer_linksIoProps = useIoStore((state)=>state["Home"]["footer_links"]);
const footer_linksCb = usefooter_linksCb()
const footer_aboutProps = useStore((state)=>state["Home"]["footer_about"]);
const footer_aboutIoProps = useIoStore((state)=>state["Home"]["footer_about"]);
const footer_aboutCb = usefooter_aboutCb()
const footer_servicesProps = useStore((state)=>state["Home"]["footer_services"]);
const footer_servicesIoProps = useIoStore((state)=>state["Home"]["footer_services"]);
const footer_servicesCb = usefooter_servicesCb()
const experience_footerProps = useStore((state)=>state["Home"]["experience_footer"]);
const experience_footerIoProps = useIoStore((state)=>state["Home"]["experience_footer"]);
const experience_footerCb = useexperience_footerCb()
const sub_footer_wrapperProps = useStore((state)=>state["Home"]["sub_footer_wrapper"]);
const sub_footer_wrapperIoProps = useIoStore((state)=>state["Home"]["sub_footer_wrapper"]);
const sub_footer_wrapperCb = usesub_footer_wrapperCb()
const sub_footer_textProps = useStore((state)=>state["Home"]["sub_footer_text"]);
const sub_footer_textIoProps = useIoStore((state)=>state["Home"]["sub_footer_text"]);
const sub_footer_textCb = usesub_footer_textCb()
const ImageProps = useStore((state)=>state["Home"]["Image"]);
const ImageIoProps = useIoStore((state)=>state["Home"]["Image"]);
const ImageCb = useImageCb()
const blogProps = useStore((state)=>state["Home"]["blog"]);
const blogIoProps = useIoStore((state)=>state["Home"]["blog"]);
const blogCb = useblogCb()
const aboutProps = useStore((state)=>state["Home"]["about"]);
const aboutIoProps = useIoStore((state)=>state["Home"]["about"]);
const aboutCb = useaboutCb()
const servicesProps = useStore((state)=>state["Home"]["services"]);
const servicesIoProps = useIoStore((state)=>state["Home"]["services"]);
const servicesCb = useservicesCb()
const projectsProps = useStore((state)=>state["Home"]["projects"]);
const projectsIoProps = useIoStore((state)=>state["Home"]["projects"]);
const projectsCb = useprojectsCb()
const noneProps = useStore((state)=>state["Home"]["none"]);
const noneIoProps = useIoStore((state)=>state["Home"]["none"]);
const noneCb = usenoneCb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const paragraphProps = useStore((state)=>state["Home"]["paragraph"]);
const paragraphIoProps = useIoStore((state)=>state["Home"]["paragraph"]);
const paragraphCb = useparagraphCb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const ButtonProps = useStore((state)=>state["Home"]["Button"]);
const ButtonIoProps = useIoStore((state)=>state["Home"]["Button"]);
const ButtonCb = useButtonCb()
const home_hero_link_textProps = useStore((state)=>state["Home"]["home_hero_link_text"]);
const home_hero_link_textIoProps = useIoStore((state)=>state["Home"]["home_hero_link_text"]);
const home_hero_link_textCb = usehome_hero_link_textCb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const trusted_by_text_blockProps = useStore((state)=>state["Home"]["trusted_by_text_block"]);
const trusted_by_text_blockIoProps = useIoStore((state)=>state["Home"]["trusted_by_text_block"]);
const trusted_by_text_blockCb = usetrusted_by_text_blockCb()
const image_oneProps = useStore((state)=>state["Home"]["image_one"]);
const image_oneIoProps = useIoStore((state)=>state["Home"]["image_one"]);
const image_oneCb = useimage_oneCb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const image_fourProps = useStore((state)=>state["Home"]["image_four"]);
const image_fourIoProps = useIoStore((state)=>state["Home"]["image_four"]);
const image_fourCb = useimage_fourCb()
const image_thirdProps = useStore((state)=>state["Home"]["image_third"]);
const image_thirdIoProps = useIoStore((state)=>state["Home"]["image_third"]);
const image_thirdCb = useimage_thirdCb()
const services_headingProps = useStore((state)=>state["Home"]["services_heading"]);
const services_headingIoProps = useIoStore((state)=>state["Home"]["services_heading"]);
const services_headingCb = useservices_headingCb()
const main_headingProps = useStore((state)=>state["Home"]["main_heading"]);
const main_headingIoProps = useIoStore((state)=>state["Home"]["main_heading"]);
const main_headingCb = usemain_headingCb()
const image_containProps = useStore((state)=>state["Home"]["image_contain"]);
const image_containIoProps = useIoStore((state)=>state["Home"]["image_contain"]);
const image_containCb = useimage_containCb()
const headingProps = useStore((state)=>state["Home"]["heading"]);
const headingIoProps = useIoStore((state)=>state["Home"]["heading"]);
const headingCb = useheadingCb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const textProps = useStore((state)=>state["Home"]["text"]);
const textIoProps = useIoStore((state)=>state["Home"]["text"]);
const textCb = usetextCb()
const secondtextProps = useStore((state)=>state["Home"]["secondtext"]);
const secondtextIoProps = useIoStore((state)=>state["Home"]["secondtext"]);
const secondtextCb = usesecondtextCb()
const thirdtextProps = useStore((state)=>state["Home"]["thirdtext"]);
const thirdtextIoProps = useIoStore((state)=>state["Home"]["thirdtext"]);
const thirdtextCb = usethirdtextCb()
const itemText3Props = useStore((state)=>state["Home"]["itemText3"]);
const itemText3IoProps = useIoStore((state)=>state["Home"]["itemText3"]);
const itemText3Cb = useitemText3Cb()
const itemText2Props = useStore((state)=>state["Home"]["itemText2"]);
const itemText2IoProps = useIoStore((state)=>state["Home"]["itemText2"]);
const itemText2Cb = useitemText2Cb()
const real_second_service_pointer_oneProps = useStore((state)=>state["Home"]["real_second_service_pointer_one"]);
const real_second_service_pointer_oneIoProps = useIoStore((state)=>state["Home"]["real_second_service_pointer_one"]);
const real_second_service_pointer_oneCb = usereal_second_service_pointer_oneCb()
const real_second_service_wrapper_paragraphProps = useStore((state)=>state["Home"]["real_second_service_wrapper_paragraph"]);
const real_second_service_wrapper_paragraphIoProps = useIoStore((state)=>state["Home"]["real_second_service_wrapper_paragraph"]);
const real_second_service_wrapper_paragraphCb = usereal_second_service_wrapper_paragraphCb()
const second_service_headingProps = useStore((state)=>state["Home"]["second_service_heading"]);
const second_service_headingIoProps = useIoStore((state)=>state["Home"]["second_service_heading"]);
const second_service_headingCb = usesecond_service_headingCb()
const second_real_imageProps = useStore((state)=>state["Home"]["second_real_image"]);
const second_real_imageIoProps = useIoStore((state)=>state["Home"]["second_real_image"]);
const second_real_imageCb = usesecond_real_imageCb()
const third_service_pointer_threeProps = useStore((state)=>state["Home"]["third_service_pointer_three"]);
const third_service_pointer_threeIoProps = useIoStore((state)=>state["Home"]["third_service_pointer_three"]);
const third_service_pointer_threeCb = usethird_service_pointer_threeCb()
const third_service_pointer_twoProps = useStore((state)=>state["Home"]["third_service_pointer_two"]);
const third_service_pointer_twoIoProps = useIoStore((state)=>state["Home"]["third_service_pointer_two"]);
const third_service_pointer_twoCb = usethird_service_pointer_twoCb()
const real_third_service_pointer_oneProps = useStore((state)=>state["Home"]["real_third_service_pointer_one"]);
const real_third_service_pointer_oneIoProps = useIoStore((state)=>state["Home"]["real_third_service_pointer_one"]);
const real_third_service_pointer_oneCb = usereal_third_service_pointer_oneCb()
const third_paragraphProps = useStore((state)=>state["Home"]["third_paragraph"]);
const third_paragraphIoProps = useIoStore((state)=>state["Home"]["third_paragraph"]);
const third_paragraphCb = usethird_paragraphCb()
const third_headingProps = useStore((state)=>state["Home"]["third_heading"]);
const third_headingIoProps = useIoStore((state)=>state["Home"]["third_heading"]);
const third_headingCb = usethird_headingCb()
const third_service_iconProps = useStore((state)=>state["Home"]["third_service_icon"]);
const third_service_iconIoProps = useIoStore((state)=>state["Home"]["third_service_icon"]);
const third_service_iconCb = usethird_service_iconCb()
const case_studies_project_buttonProps = useStore((state)=>state["Home"]["case_studies_project_button"]);
const case_studies_project_buttonIoProps = useIoStore((state)=>state["Home"]["case_studies_project_button"]);
const case_studies_project_buttonCb = usecase_studies_project_buttonCb()
const case_studies_subText_firstProps = useStore((state)=>state["Home"]["case_studies_subText_first"]);
const case_studies_subText_firstIoProps = useIoStore((state)=>state["Home"]["case_studies_subText_first"]);
const case_studies_subText_firstCb = usecase_studies_subText_firstCb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const project_slide_tag_textProps = useStore((state)=>state["Home"]["project_slide_tag_text"]);
const project_slide_tag_textIoProps = useIoStore((state)=>state["Home"]["project_slide_tag_text"]);
const project_slide_tag_textCb = useproject_slide_tag_textCb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const project_slide_text_blockProps = useStore((state)=>state["Home"]["project_slide_text_block"]);
const project_slide_text_blockIoProps = useIoStore((state)=>state["Home"]["project_slide_text_block"]);
const project_slide_text_blockCb = useproject_slide_text_blockCb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const second_project_slide_text_blockProps = useStore((state)=>state["Home"]["second_project_slide_text_block"]);
const second_project_slide_text_blockIoProps = useIoStore((state)=>state["Home"]["second_project_slide_text_block"]);
const second_project_slide_text_blockCb = usesecond_project_slide_text_blockCb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const second_project_slide_tag_textProps = useStore((state)=>state["Home"]["second_project_slide_tag_text"]);
const second_project_slide_tag_textIoProps = useIoStore((state)=>state["Home"]["second_project_slide_tag_text"]);
const second_project_slide_tag_textCb = usesecond_project_slide_tag_textCb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const Div64Props = useStore((state)=>state["Home"]["Div64"]);
const Div64IoProps = useIoStore((state)=>state["Home"]["Div64"]);
const Div64Cb = useDiv64Cb()
const Div62Props = useStore((state)=>state["Home"]["Div62"]);
const Div62IoProps = useIoStore((state)=>state["Home"]["Div62"]);
const Div62Cb = useDiv62Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const second_image_containProps = useStore((state)=>state["Home"]["second_image_contain"]);
const second_image_containIoProps = useIoStore((state)=>state["Home"]["second_image_contain"]);
const second_image_containCb = usesecond_image_containCb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const blog_item_view_allProps = useStore((state)=>state["Home"]["blog_item_view_all"]);
const blog_item_view_allIoProps = useIoStore((state)=>state["Home"]["blog_item_view_all"]);
const blog_item_view_allCb = useblog_item_view_allCb()
const white_arrowProps = useStore((state)=>state["Home"]["white_arrow"]);
const white_arrowIoProps = useIoStore((state)=>state["Home"]["white_arrow"]);
const white_arrowCb = usewhite_arrowCb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const experience_gray_bottom_borderProps = useStore((state)=>state["Home"]["experience_gray_bottom_border"]);
const experience_gray_bottom_borderIoProps = useIoStore((state)=>state["Home"]["experience_gray_bottom_border"]);
const experience_gray_bottom_borderCb = useexperience_gray_bottom_borderCb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const experience_gary_bottom_border_secondProps = useStore((state)=>state["Home"]["experience_gary_bottom_border_second"]);
const experience_gary_bottom_border_secondIoProps = useIoStore((state)=>state["Home"]["experience_gary_bottom_border_second"]);
const experience_gary_bottom_border_secondCb = useexperience_gary_bottom_border_secondCb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const experience_gray_bottom_border_thirdProps = useStore((state)=>state["Home"]["experience_gray_bottom_border_third"]);
const experience_gray_bottom_border_thirdIoProps = useIoStore((state)=>state["Home"]["experience_gray_bottom_border_third"]);
const experience_gray_bottom_border_thirdCb = useexperience_gray_bottom_border_thirdCb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const experience_right_gary_bottom_third_borderProps = useStore((state)=>state["Home"]["experience_right_gary_bottom_third_border"]);
const experience_right_gary_bottom_third_borderIoProps = useIoStore((state)=>state["Home"]["experience_right_gary_bottom_third_border"]);
const experience_right_gary_bottom_third_borderCb = useexperience_right_gary_bottom_third_borderCb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const experience_right_gray_bottom_second_wrapperProps = useStore((state)=>state["Home"]["experience_right_gray_bottom_second_wrapper"]);
const experience_right_gray_bottom_second_wrapperIoProps = useIoStore((state)=>state["Home"]["experience_right_gray_bottom_second_wrapper"]);
const experience_right_gray_bottom_second_wrapperCb = useexperience_right_gray_bottom_second_wrapperCb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const experience_right_gray_bottom_border_firstProps = useStore((state)=>state["Home"]["experience_right_gray_bottom_border_first"]);
const experience_right_gray_bottom_border_firstIoProps = useIoStore((state)=>state["Home"]["experience_right_gray_bottom_border_first"]);
const experience_right_gray_bottom_border_firstCb = useexperience_right_gray_bottom_border_firstCb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const footer_headingProps = useStore((state)=>state["Home"]["footer_heading"]);
const footer_headingIoProps = useIoStore((state)=>state["Home"]["footer_heading"]);
const footer_headingCb = usefooter_headingCb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const experience_footer_textProps = useStore((state)=>state["Home"]["experience_footer_text"]);
const experience_footer_textIoProps = useIoStore((state)=>state["Home"]["experience_footer_text"]);
const experience_footer_textCb = useexperience_footer_textCb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()

  return (<>
  <Div className="p-Home navbar bpt" {...navbarProps} {...navbarCb} {...navbarIoProps}>
<Flex className="p-Home wrapper_nav bpt" {...wrapper_navProps} {...wrapper_navCb} {...wrapper_navIoProps}>
<Image className="p-Home Image bpt" {...ImageProps} {...ImageCb} {...ImageIoProps}/>
<Link className="p-Home about bpt" {...aboutProps} {...aboutCb} {...aboutIoProps}/>
<Link className="p-Home services bpt" {...servicesProps} {...servicesCb} {...servicesIoProps}/>
<Link className="p-Home projects bpt" {...projectsProps} {...projectsCb} {...projectsIoProps}/>
<Link className="p-Home blog bpt" {...blogProps} {...blogCb} {...blogIoProps}/>
<Link className="p-Home none bpt" {...noneProps} {...noneCb} {...noneIoProps}/>
</Flex>
</Div>
<Div className="p-Home home_hero_section bpt" {...home_hero_sectionProps} {...home_hero_sectionCb} {...home_hero_sectionIoProps}>
<Flex className="p-Home wrapper_home_hero bpt" {...wrapper_home_heroProps} {...wrapper_home_heroCb} {...wrapper_home_heroIoProps}>
<Div className="p-Home home_hero_content_wrapper bpt" {...home_hero_content_wrapperProps} {...home_hero_content_wrapperCb} {...home_hero_content_wrapperIoProps}>
<Div className="p-Home hero_home_heading_wrapper bpt" {...hero_home_heading_wrapperProps} {...hero_home_heading_wrapperCb} {...hero_home_heading_wrapperIoProps}>
<TextBox className="p-Home TextBox1 bpt" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
</Div>
<Div className="p-Home home_hero_paragraph_wrapper bpt" {...home_hero_paragraph_wrapperProps} {...home_hero_paragraph_wrapperCb} {...home_hero_paragraph_wrapperIoProps}>
<TextBox className="p-Home paragraph bpt" {...paragraphProps} {...paragraphCb} {...paragraphIoProps}/>
</Div>
<Div className="p-Home Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<Flex className="p-Home home_hero_button_wrapper bpt" {...home_hero_button_wrapperProps} {...home_hero_button_wrapperCb} {...home_hero_button_wrapperIoProps}>
<Div className="p-Home button_inline_block bpt" {...button_inline_blockProps} {...button_inline_blockCb} {...button_inline_blockIoProps}>
<Button className="p-Home Button bpt" {...ButtonProps} {...ButtonCb} {...ButtonIoProps}/>
</Div>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}/>
<Div className="p-Home Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}/>
<Flex className="p-Home hero_link_wrapper bpt" {...hero_link_wrapperProps} {...hero_link_wrapperCb} {...hero_link_wrapperIoProps}>
<TextBox className="p-Home home_hero_link_text bpt" {...home_hero_link_textProps} {...home_hero_link_textCb} {...home_hero_link_textIoProps}/>
</Flex>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home home_hero_image_wrapper bpt" {...home_hero_image_wrapperProps} {...home_hero_image_wrapperCb} {...home_hero_image_wrapperIoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home trusted_bt_section bpt" {...trusted_bt_sectionProps} {...trusted_bt_sectionCb} {...trusted_bt_sectionIoProps}>
<Flex className="p-Home trusted_by_wrapper bpt" {...trusted_by_wrapperProps} {...trusted_by_wrapperCb} {...trusted_by_wrapperIoProps}>
<Div className="p-Home trusted_by_text_wrapper bpt" {...trusted_by_text_wrapperProps} {...trusted_by_text_wrapperCb} {...trusted_by_text_wrapperIoProps}>
<TextBox className="p-Home trusted_by_text_block bpt" {...trusted_by_text_blockProps} {...trusted_by_text_blockCb} {...trusted_by_text_blockIoProps}/>
</Div>
<Flex className="p-Home trusted_logo_flexbox bpt" {...trusted_logo_flexboxProps} {...trusted_logo_flexboxCb} {...trusted_logo_flexboxIoProps}>
<Div className="p-Home trusted_image_one bpt" {...trusted_image_oneProps} {...trusted_image_oneCb} {...trusted_image_oneIoProps}>
<Image className="p-Home image_one bpt" {...image_oneProps} {...image_oneCb} {...image_oneIoProps}/>
</Div>
<Div className="p-Home trusted_image_two bpt" {...trusted_image_twoProps} {...trusted_image_twoCb} {...trusted_image_twoIoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Div>
<Div className="p-Home trusted_image_third bpt" {...trusted_image_thirdProps} {...trusted_image_thirdCb} {...trusted_image_thirdIoProps}>
<Image className="p-Home image_third bpt" {...image_thirdProps} {...image_thirdCb} {...image_thirdIoProps}/>
</Div>
<Div className="p-Home trusted_image_four bpt" {...trusted_image_fourProps} {...trusted_image_fourCb} {...trusted_image_fourIoProps}>
<Image className="p-Home image_four bpt" {...image_fourProps} {...image_fourCb} {...image_fourIoProps}/>
</Div>
</Flex>
</Flex>
</Div>
<Div className="p-Home service_section bpt" {...service_sectionProps} {...service_sectionCb} {...service_sectionIoProps}>
<Flex className="p-Home service_wrapper bpt" {...service_wrapperProps} {...service_wrapperCb} {...service_wrapperIoProps}>
<Div className="p-Home service_heading_and_text_wrapper bpt" {...service_heading_and_text_wrapperProps} {...service_heading_and_text_wrapperCb} {...service_heading_and_text_wrapperIoProps}>
<Div className="p-Home service_sub_text_wrapper bpt" {...service_sub_text_wrapperProps} {...service_sub_text_wrapperCb} {...service_sub_text_wrapperIoProps}>
<TextBox className="p-Home services_heading bpt" {...services_headingProps} {...services_headingCb} {...services_headingIoProps}/>
</Div>
<Div className="p-Home service_heading_wrapper bpt" {...service_heading_wrapperProps} {...service_heading_wrapperCb} {...service_heading_wrapperIoProps}>
<TextBox className="p-Home main_heading bpt" {...main_headingProps} {...main_headingCb} {...main_headingIoProps}/>
</Div>
</Div>
<Flex className="p-Home services_flexbox bpt" {...services_flexboxProps} {...services_flexboxCb} {...services_flexboxIoProps}>
<Div className="p-Home service_wrapper_first bpt" {...service_wrapper_firstProps} {...service_wrapper_firstCb} {...service_wrapper_firstIoProps}>
<Flex className="p-Home service_item_icon_wrapper bpt" {...service_item_icon_wrapperProps} {...service_item_icon_wrapperCb} {...service_item_icon_wrapperIoProps}>
<Image className="p-Home image_contain bpt" {...image_containProps} {...image_containCb} {...image_containIoProps}/>
</Flex>
<Div className="p-Home service_item_heading_wrapper bpt" {...service_item_heading_wrapperProps} {...service_item_heading_wrapperCb} {...service_item_heading_wrapperIoProps}>
<TextBox className="p-Home heading bpt" {...headingProps} {...headingCb} {...headingIoProps}/>
</Div>
<Div className="p-Home service_item_paragraph_wrapper bpt" {...service_item_paragraph_wrapperProps} {...service_item_paragraph_wrapperCb} {...service_item_paragraph_wrapperIoProps}>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Div>
<Div className="p-Home service_pointer_wrapper bpt" {...service_pointer_wrapperProps} {...service_pointer_wrapperCb} {...service_pointer_wrapperIoProps}>
<Div className="p-Home service_pointer_item bpt" {...service_pointer_itemProps} {...service_pointer_itemCb} {...service_pointer_itemIoProps}>
<TextBox className="p-Home text bpt" {...textProps} {...textCb} {...textIoProps}/>
</Div>
</Div>
<Div className="p-Home service_pointer_item_two bpt" {...service_pointer_item_twoProps} {...service_pointer_item_twoCb} {...service_pointer_item_twoIoProps}>
<TextBox className="p-Home secondtext bpt" {...secondtextProps} {...secondtextCb} {...secondtextIoProps}/>
</Div>
<Div className="p-Home service_pointer_item_three bpt" {...service_pointer_item_threeProps} {...service_pointer_item_threeCb} {...service_pointer_item_threeIoProps}>
<TextBox className="p-Home thirdtext bpt" {...thirdtextProps} {...thirdtextCb} {...thirdtextIoProps}/>
</Div>
</Div>
<Div className="p-Home real_second_service_wrapper bpt" {...real_second_service_wrapperProps} {...real_second_service_wrapperCb} {...real_second_service_wrapperIoProps}>
<Flex className="p-Home real_second_service_item_icon_wrapper bpt" {...real_second_service_item_icon_wrapperProps} {...real_second_service_item_icon_wrapperCb} {...real_second_service_item_icon_wrapperIoProps}>
<Image className="p-Home second_real_image bpt" {...second_real_imageProps} {...second_real_imageCb} {...second_real_imageIoProps}/>
</Flex>
<Div className="p-Home real_second_service_heading bpt" {...real_second_service_headingProps} {...real_second_service_headingCb} {...real_second_service_headingIoProps}>
<TextBox className="p-Home second_service_heading bpt" {...second_service_headingProps} {...second_service_headingCb} {...second_service_headingIoProps}/>
</Div>
<Div className="p-Home real_second_service_item_paragraph_wrapper bpt" {...real_second_service_item_paragraph_wrapperProps} {...real_second_service_item_paragraph_wrapperCb} {...real_second_service_item_paragraph_wrapperIoProps}>
<TextBox className="p-Home real_second_service_wrapper_paragraph bpt" {...real_second_service_wrapper_paragraphProps} {...real_second_service_wrapper_paragraphCb} {...real_second_service_wrapper_paragraphIoProps}/>
</Div>
<Div className="p-Home second_service_pointer_one bpt" {...second_service_pointer_oneProps} {...second_service_pointer_oneCb} {...second_service_pointer_oneIoProps}>
<Div className="p-Home itemText1 bpt" {...itemText1Props} {...itemText1Cb} {...itemText1IoProps}>
<TextBox className="p-Home real_second_service_pointer_one bpt" {...real_second_service_pointer_oneProps} {...real_second_service_pointer_oneCb} {...real_second_service_pointer_oneIoProps}/>
</Div>
</Div>
<Div className="p-Home second_service_pointer_two bpt" {...second_service_pointer_twoProps} {...second_service_pointer_twoCb} {...second_service_pointer_twoIoProps}>
<TextBox className="p-Home itemText2 bpt" {...itemText2Props} {...itemText2Cb} {...itemText2IoProps}/>
</Div>
<Div className="p-Home second_service_pointer_three bpt" {...second_service_pointer_threeProps} {...second_service_pointer_threeCb} {...second_service_pointer_threeIoProps}>
<TextBox className="p-Home itemText3 bpt" {...itemText3Props} {...itemText3Cb} {...itemText3IoProps}/>
</Div>
</Div>
<Div className="p-Home service_wrapper_third bpt" {...service_wrapper_thirdProps} {...service_wrapper_thirdCb} {...service_wrapper_thirdIoProps}>
<Flex className="p-Home third_service_item_icon_wrapper bpt" {...third_service_item_icon_wrapperProps} {...third_service_item_icon_wrapperCb} {...third_service_item_icon_wrapperIoProps}>
<Image className="p-Home third_service_icon bpt" {...third_service_iconProps} {...third_service_iconCb} {...third_service_iconIoProps}/>
</Flex>
<Div className="p-Home third_service_item_heading_wrapper bpt" {...third_service_item_heading_wrapperProps} {...third_service_item_heading_wrapperCb} {...third_service_item_heading_wrapperIoProps}>
<TextBox className="p-Home third_heading bpt" {...third_headingProps} {...third_headingCb} {...third_headingIoProps}/>
</Div>
<Div className="p-Home third_service_item_paragraph_wrapper bpt" {...third_service_item_paragraph_wrapperProps} {...third_service_item_paragraph_wrapperCb} {...third_service_item_paragraph_wrapperIoProps}>
<TextBox className="p-Home third_paragraph bpt" {...third_paragraphProps} {...third_paragraphCb} {...third_paragraphIoProps}/>
</Div>
<Div className="p-Home third_service_pointer_wrapper_one bpt" {...third_service_pointer_wrapper_oneProps} {...third_service_pointer_wrapper_oneCb} {...third_service_pointer_wrapper_oneIoProps}>
<Div className="p-Home third_service_pointer_one bpt" {...third_service_pointer_oneProps} {...third_service_pointer_oneCb} {...third_service_pointer_oneIoProps}>
<TextBox className="p-Home real_third_service_pointer_one bpt" {...real_third_service_pointer_oneProps} {...real_third_service_pointer_oneCb} {...real_third_service_pointer_oneIoProps}/>
</Div>
</Div>
<Div className="p-Home third_service_pointer_wrapper_two bpt" {...third_service_pointer_wrapper_twoProps} {...third_service_pointer_wrapper_twoCb} {...third_service_pointer_wrapper_twoIoProps}>
<TextBox className="p-Home third_service_pointer_two bpt" {...third_service_pointer_twoProps} {...third_service_pointer_twoCb} {...third_service_pointer_twoIoProps}/>
</Div>
<Div className="p-Home third_service_pointer_wrapper_three bpt" {...third_service_pointer_wrapper_threeProps} {...third_service_pointer_wrapper_threeCb} {...third_service_pointer_wrapper_threeIoProps}>
<TextBox className="p-Home third_service_pointer_three bpt" {...third_service_pointer_threeProps} {...third_service_pointer_threeCb} {...third_service_pointer_threeIoProps}/>
</Div>
</Div>
</Flex>
</Flex>
</Div>
<Div className="p-Home case_studies_section bpt" {...case_studies_sectionProps} {...case_studies_sectionCb} {...case_studies_sectionIoProps}>
<Flex className="p-Home case_studies_heading_wrapper bpt" {...case_studies_heading_wrapperProps} {...case_studies_heading_wrapperCb} {...case_studies_heading_wrapperIoProps}>
<Div className="p-Home case_studies_heading_and_subText_wrapper bpt" {...case_studies_heading_and_subText_wrapperProps} {...case_studies_heading_and_subText_wrapperCb} {...case_studies_heading_and_subText_wrapperIoProps}>
<Div className="p-Home case_studies_subText_wrapper bpt" {...case_studies_subText_wrapperProps} {...case_studies_subText_wrapperCb} {...case_studies_subText_wrapperIoProps}>
<TextBox className="p-Home case_studies_subText_first bpt" {...case_studies_subText_firstProps} {...case_studies_subText_firstCb} {...case_studies_subText_firstIoProps}/>
</Div>
<Div className="p-Home case_studies_main_heading bpt" {...case_studies_main_headingProps} {...case_studies_main_headingCb} {...case_studies_main_headingIoProps}>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
</Div>
</Div>
<Button className="p-Home case_studies_project_button bpt" {...case_studies_project_buttonProps} {...case_studies_project_buttonCb} {...case_studies_project_buttonIoProps}/>
</Flex>
<Flex className="p-Home project_slider bpt" {...project_sliderProps} {...project_sliderCb} {...project_sliderIoProps}>
<Flex className="p-Home first_slider bpt" {...first_sliderProps} {...first_sliderCb} {...first_sliderIoProps}>
<Div className="p-Home project_slider_mask bpt" {...project_slider_maskProps} {...project_slider_maskCb} {...project_slider_maskIoProps}>
<Div className="p-Home first_project_slide bpt" {...first_project_slideProps} {...first_project_slideCb} {...first_project_slideIoProps}>
<Div className="p-Home w_dyn_list bpt" {...w_dyn_listProps} {...w_dyn_listCb} {...w_dyn_listIoProps}>
<Flex className="p-Home project_slide_link_block bpt" {...project_slide_link_blockProps} {...project_slide_link_blockCb} {...project_slide_link_blockIoProps}>
<Div className="p-Home project_slide_image_wrapper bpt" {...project_slide_image_wrapperProps} {...project_slide_image_wrapperCb} {...project_slide_image_wrapperIoProps}>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Div>
<Div className="p-Home project_slide_content bpt" {...project_slide_contentProps} {...project_slide_contentCb} {...project_slide_contentIoProps}>
<Div className="p-Home project_slide_tag_wrapper bpt" {...project_slide_tag_wrapperProps} {...project_slide_tag_wrapperCb} {...project_slide_tag_wrapperIoProps}>
<TextBox className="p-Home project_slide_tag_text bpt" {...project_slide_tag_textProps} {...project_slide_tag_textCb} {...project_slide_tag_textIoProps}/>
</Div>
<Div className="p-Home project_slide_main_heading bpt" {...project_slide_main_headingProps} {...project_slide_main_headingCb} {...project_slide_main_headingIoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Div>
<Flex className="p-Home viwe_project_div bpt" {...viwe_project_divProps} {...viwe_project_divCb} {...viwe_project_divIoProps}>
<TextBox className="p-Home project_slide_text_block bpt" {...project_slide_text_blockProps} {...project_slide_text_blockCb} {...project_slide_text_blockIoProps}/>
<Flex className="p-Home view_project_arrow bpt" {...view_project_arrowProps} {...view_project_arrowCb} {...view_project_arrowIoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Div>
</Div>
</Div>
</Flex>
<Flex className="p-Home second_slider bpt" {...second_sliderProps} {...second_sliderCb} {...second_sliderIoProps}>
<Div className="p-Home second_project_slider_mask bpt" {...second_project_slider_maskProps} {...second_project_slider_maskCb} {...second_project_slider_maskIoProps}>
<Div className="p-Home second_project_slide bpt" {...second_project_slideProps} {...second_project_slideCb} {...second_project_slideIoProps}>
<Div className="p-Home second_w_dyn_list bpt" {...second_w_dyn_listProps} {...second_w_dyn_listCb} {...second_w_dyn_listIoProps}>
<Flex className="p-Home second_project_slide_link_block bpt" {...second_project_slide_link_blockProps} {...second_project_slide_link_blockCb} {...second_project_slide_link_blockIoProps}>
<Div className="p-Home second_project_slide_image_wrapper bpt" {...second_project_slide_image_wrapperProps} {...second_project_slide_image_wrapperCb} {...second_project_slide_image_wrapperIoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Div>
<Div className="p-Home second_project_slide_content bpt" {...second_project_slide_contentProps} {...second_project_slide_contentCb} {...second_project_slide_contentIoProps}>
<Div className="p-Home second_project_tag_wrapper bpt" {...second_project_tag_wrapperProps} {...second_project_tag_wrapperCb} {...second_project_tag_wrapperIoProps}>
<TextBox className="p-Home second_project_slide_tag_text bpt" {...second_project_slide_tag_textProps} {...second_project_slide_tag_textCb} {...second_project_slide_tag_textIoProps}/>
</Div>
<Div className="p-Home second_project_slide_main_heading bpt" {...second_project_slide_main_headingProps} {...second_project_slide_main_headingCb} {...second_project_slide_main_headingIoProps}>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Div>
<Flex className="p-Home second_view_project_div bpt" {...second_view_project_divProps} {...second_view_project_divCb} {...second_view_project_divIoProps}>
<TextBox className="p-Home second_project_slide_text_block bpt" {...second_project_slide_text_blockProps} {...second_project_slide_text_blockCb} {...second_project_slide_text_blockIoProps}/>
<Flex className="p-Home second_view_project_arrow bpt" {...second_view_project_arrowProps} {...second_view_project_arrowCb} {...second_view_project_arrowIoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Div>
</Div>
</Div>
</Flex>
<Flex className="p-Home project_slider_left_arrow bpt" {...project_slider_left_arrowProps} {...project_slider_left_arrowCb} {...project_slider_left_arrowIoProps}>
<Flex className="p-Home project_arrow_left_arrow_icon_wrapper bpt" {...project_arrow_left_arrow_icon_wrapperProps} {...project_arrow_left_arrow_icon_wrapperCb} {...project_arrow_left_arrow_icon_wrapperIoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home project_slider_right_arrow bpt" {...project_slider_right_arrowProps} {...project_slider_right_arrowCb} {...project_slider_right_arrowIoProps}>
<Flex className="p-Home project_arrow_right_icon_wrapper bpt" {...project_arrow_right_icon_wrapperProps} {...project_arrow_right_icon_wrapperCb} {...project_arrow_right_icon_wrapperIoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home blog_section bpt" {...blog_sectionProps} {...blog_sectionCb} {...blog_sectionIoProps}>
<Flex className="p-Home blog_homepage_wrapper bpt" {...blog_homepage_wrapperProps} {...blog_homepage_wrapperCb} {...blog_homepage_wrapperIoProps}>
<Div className="p-Home blog_heading_and_subtext_wrapper bpt" {...blog_heading_and_subtext_wrapperProps} {...blog_heading_and_subtext_wrapperCb} {...blog_heading_and_subtext_wrapperIoProps}>
<Div className="p-Home blog_subtext_main bpt" {...blog_subtext_mainProps} {...blog_subtext_mainCb} {...blog_subtext_mainIoProps}>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
</Div>
<Div className="p-Home blog_heading_wrapper bpt" {...blog_heading_wrapperProps} {...blog_heading_wrapperCb} {...blog_heading_wrapperIoProps}>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Div>
<Flex className="p-Home blog_item_read_the_article_wrapper bpt" {...blog_item_read_the_article_wrapperProps} {...blog_item_read_the_article_wrapperCb} {...blog_item_read_the_article_wrapperIoProps}>
<Div className="p-Home blog_item_read_the_article_text_wrapper bpt" {...blog_item_read_the_article_text_wrapperProps} {...blog_item_read_the_article_text_wrapperCb} {...blog_item_read_the_article_text_wrapperIoProps}>
<TextBox className="p-Home blog_item_view_all bpt" {...blog_item_view_allProps} {...blog_item_view_allCb} {...blog_item_view_allIoProps}/>
</Div>
<Flex className="p-Home blog_item_arrow_wrapper bpt" {...blog_item_arrow_wrapperProps} {...blog_item_arrow_wrapperCb} {...blog_item_arrow_wrapperIoProps}>
<Image className="p-Home white_arrow bpt" {...white_arrowProps} {...white_arrowCb} {...white_arrowIoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home blog_content_wrapper bpt" {...blog_content_wrapperProps} {...blog_content_wrapperCb} {...blog_content_wrapperIoProps}>
<Div className="p-Home blog_dyn_item_first bpt" {...blog_dyn_item_firstProps} {...blog_dyn_item_firstCb} {...blog_dyn_item_firstIoProps}>
<Flex className="p-Home blog_section_blog_item_first bpt" {...blog_section_blog_item_firstProps} {...blog_section_blog_item_firstCb} {...blog_section_blog_item_firstIoProps}>
<Flex className="p-Home blog_item_date_and_time_wrapper bpt" {...blog_item_date_and_time_wrapperProps} {...blog_item_date_and_time_wrapperCb} {...blog_item_date_and_time_wrapperIoProps}>
<Div className="p-Home blog_item_date_wrapper bpt" {...blog_item_date_wrapperProps} {...blog_item_date_wrapperCb} {...blog_item_date_wrapperIoProps}>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Div>
<Div className="p-Home blog_item_time_wrapper bpt" {...blog_item_time_wrapperProps} {...blog_item_time_wrapperCb} {...blog_item_time_wrapperIoProps}>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Div>
</Flex>
<Div className="p-Home blog_item_heading_wrapper bpt" {...blog_item_heading_wrapperProps} {...blog_item_heading_wrapperCb} {...blog_item_heading_wrapperIoProps}>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Div>
<Flex className="p-Home blog_read_the_article_wrapper bpt" {...blog_read_the_article_wrapperProps} {...blog_read_the_article_wrapperCb} {...blog_read_the_article_wrapperIoProps}>
<Div className="p-Home read_the_article_text bpt" {...read_the_article_textProps} {...read_the_article_textCb} {...read_the_article_textIoProps}>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Div>
<Flex className="p-Home read_article_white_arrow bpt" {...read_article_white_arrowProps} {...read_article_white_arrowCb} {...read_article_white_arrowIoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home blog_dyn_second_item bpt" {...blog_dyn_second_itemProps} {...blog_dyn_second_itemCb} {...blog_dyn_second_itemIoProps}>
<Flex className="p-Home blog_section_blog_item_second bpt" {...blog_section_blog_item_secondProps} {...blog_section_blog_item_secondCb} {...blog_section_blog_item_secondIoProps}>
<Flex className="p-Home blog_section_date_and_time_wrapper_second bpt" {...blog_section_date_and_time_wrapper_secondProps} {...blog_section_date_and_time_wrapper_secondCb} {...blog_section_date_and_time_wrapper_secondIoProps}>
<Div className="p-Home blog_item_date_wrapper_second bpt" {...blog_item_date_wrapper_secondProps} {...blog_item_date_wrapper_secondCb} {...blog_item_date_wrapper_secondIoProps}>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Div>
<Div className="p-Home blog_item_time_wrapper_second bpt" {...blog_item_time_wrapper_secondProps} {...blog_item_time_wrapper_secondCb} {...blog_item_time_wrapper_secondIoProps}>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Div>
</Flex>
<Div className="p-Home blog_section_heading_wrapper_second bpt" {...blog_section_heading_wrapper_secondProps} {...blog_section_heading_wrapper_secondCb} {...blog_section_heading_wrapper_secondIoProps}>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Div>
<Flex className="p-Home blog_read_the_article_second bpt" {...blog_read_the_article_secondProps} {...blog_read_the_article_secondCb} {...blog_read_the_article_secondIoProps}>
<Div className="p-Home read_the_article_text_second bpt" {...read_the_article_text_secondProps} {...read_the_article_text_secondCb} {...read_the_article_text_secondIoProps}>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Div>
<Flex className="p-Home read_article_white_arrow_second bpt" {...read_article_white_arrow_secondProps} {...read_article_white_arrow_secondCb} {...read_article_white_arrow_secondIoProps}>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home blog_dyn_third_item bpt" {...blog_dyn_third_itemProps} {...blog_dyn_third_itemCb} {...blog_dyn_third_itemIoProps}>
<Flex className="p-Home blog_section_blog_item_third bpt" {...blog_section_blog_item_thirdProps} {...blog_section_blog_item_thirdCb} {...blog_section_blog_item_thirdIoProps}>
<Flex className="p-Home blog_section_date_and_time_wrapper_third bpt" {...blog_section_date_and_time_wrapper_thirdProps} {...blog_section_date_and_time_wrapper_thirdCb} {...blog_section_date_and_time_wrapper_thirdIoProps}>
<Div className="p-Home blog_item_date_wrapper_third bpt" {...blog_item_date_wrapper_thirdProps} {...blog_item_date_wrapper_thirdCb} {...blog_item_date_wrapper_thirdIoProps}>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Div>
<Div className="p-Home blog_item_time_wrapper_third bpt" {...blog_item_time_wrapper_thirdProps} {...blog_item_time_wrapper_thirdCb} {...blog_item_time_wrapper_thirdIoProps}>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Div>
</Flex>
<Div className="p-Home blog_section_heading_wrapper_third bpt" {...blog_section_heading_wrapper_thirdProps} {...blog_section_heading_wrapper_thirdCb} {...blog_section_heading_wrapper_thirdIoProps}>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
</Div>
<Flex className="p-Home blog_read_the_article_third bpt" {...blog_read_the_article_thirdProps} {...blog_read_the_article_thirdCb} {...blog_read_the_article_thirdIoProps}>
<Div className="p-Home read_the_article_text_third bpt" {...read_the_article_text_thirdProps} {...read_the_article_text_thirdCb} {...read_the_article_text_thirdIoProps}>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Div>
<Flex className="p-Home read_article_white_arrow_third bpt" {...read_article_white_arrow_thirdProps} {...read_article_white_arrow_thirdCb} {...read_article_white_arrow_thirdIoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home blog_dyn_fourth_item bpt" {...blog_dyn_fourth_itemProps} {...blog_dyn_fourth_itemCb} {...blog_dyn_fourth_itemIoProps}>
<Flex className="p-Home blog_section_blog_item_fourth bpt" {...blog_section_blog_item_fourthProps} {...blog_section_blog_item_fourthCb} {...blog_section_blog_item_fourthIoProps}>
<Flex className="p-Home blog_section_date_and_time_wrapper_fourth bpt" {...blog_section_date_and_time_wrapper_fourthProps} {...blog_section_date_and_time_wrapper_fourthCb} {...blog_section_date_and_time_wrapper_fourthIoProps}>
<Div className="p-Home blog_item_date_wrapper_fourth bpt" {...blog_item_date_wrapper_fourthProps} {...blog_item_date_wrapper_fourthCb} {...blog_item_date_wrapper_fourthIoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Div>
<Div className="p-Home blog_item_time_wrapper_fourth bpt" {...blog_item_time_wrapper_fourthProps} {...blog_item_time_wrapper_fourthCb} {...blog_item_time_wrapper_fourthIoProps}>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Div>
</Flex>
<Div className="p-Home blog_section_heading_wrapper_fourth bpt" {...blog_section_heading_wrapper_fourthProps} {...blog_section_heading_wrapper_fourthCb} {...blog_section_heading_wrapper_fourthIoProps}>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Div>
<Flex className="p-Home blog_read_the_article_fourth bpt" {...blog_read_the_article_fourthProps} {...blog_read_the_article_fourthCb} {...blog_read_the_article_fourthIoProps}>
<Div className="p-Home read_the_article_fourth bpt" {...read_the_article_fourthProps} {...read_the_article_fourthCb} {...read_the_article_fourthIoProps}>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Div>
<Flex className="p-Home read_article_white_arrow_fourth bpt" {...read_article_white_arrow_fourthProps} {...read_article_white_arrow_fourthCb} {...read_article_white_arrow_fourthIoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home blog_dyn_fifth_item bpt" {...blog_dyn_fifth_itemProps} {...blog_dyn_fifth_itemCb} {...blog_dyn_fifth_itemIoProps}>
<Flex className="p-Home blog_section_blog_item_fifth bpt" {...blog_section_blog_item_fifthProps} {...blog_section_blog_item_fifthCb} {...blog_section_blog_item_fifthIoProps}>
<Flex className="p-Home blog_section_date_and_time_wrapper_fifth bpt" {...blog_section_date_and_time_wrapper_fifthProps} {...blog_section_date_and_time_wrapper_fifthCb} {...blog_section_date_and_time_wrapper_fifthIoProps}>
<Div className="p-Home blog_item_date_wrapper_fifth bpt" {...blog_item_date_wrapper_fifthProps} {...blog_item_date_wrapper_fifthCb} {...blog_item_date_wrapper_fifthIoProps}>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Div>
<Div className="p-Home blog_item_time_wrapper_fifth bpt" {...blog_item_time_wrapper_fifthProps} {...blog_item_time_wrapper_fifthCb} {...blog_item_time_wrapper_fifthIoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Div>
</Flex>
<Div className="p-Home blog_section_heading_wrapper_fifth bpt" {...blog_section_heading_wrapper_fifthProps} {...blog_section_heading_wrapper_fifthCb} {...blog_section_heading_wrapper_fifthIoProps}>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
</Div>
<Flex className="p-Home blog_read_the_article_fifth bpt" {...blog_read_the_article_fifthProps} {...blog_read_the_article_fifthCb} {...blog_read_the_article_fifthIoProps}>
<Div className="p-Home read_the_article_fifth bpt" {...read_the_article_fifthProps} {...read_the_article_fifthCb} {...read_the_article_fifthIoProps}>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Div>
<Flex className="p-Home read_article_white_arrow_fifth bpt" {...read_article_white_arrow_fifthProps} {...read_article_white_arrow_fifthCb} {...read_article_white_arrow_fifthIoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
</Div>
</Flex>
</Div>
<Div className="p-Home about_section bpt" {...about_sectionProps} {...about_sectionCb} {...about_sectionIoProps}>
<Flex className="p-Home about_wrapper bpt" {...about_wrapperProps} {...about_wrapperCb} {...about_wrapperIoProps}>
<Div className="p-Home about_heading_and_subtext_wrapper bpt" {...about_heading_and_subtext_wrapperProps} {...about_heading_and_subtext_wrapperCb} {...about_heading_and_subtext_wrapperIoProps}>
<Div className="p-Home about_subtext_wrapper bpt" {...about_subtext_wrapperProps} {...about_subtext_wrapperCb} {...about_subtext_wrapperIoProps}>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Div>
<Div className="p-Home about_heading_wrapper bpt" {...about_heading_wrapperProps} {...about_heading_wrapperCb} {...about_heading_wrapperIoProps}>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Div>
</Div>
<Div className="p-Home about_content_wrapper bpt" {...about_content_wrapperProps} {...about_content_wrapperCb} {...about_content_wrapperIoProps}>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Div>
</Flex>
<Flex className="p-Home lightbox bpt" {...lightboxProps} {...lightboxCb} {...lightboxIoProps}>
<Div className="p-Home ligthbox_first_image_wrapper bpt" {...ligthbox_first_image_wrapperProps} {...ligthbox_first_image_wrapperCb} {...ligthbox_first_image_wrapperIoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Div>
<Div className="p-Home lightbox_second_image_wrapper bpt" {...lightbox_second_image_wrapperProps} {...lightbox_second_image_wrapperCb} {...lightbox_second_image_wrapperIoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
</Div>
<Flex className="p-Home lightbox_nexr_two_image_container bpt" {...lightbox_nexr_two_image_containerProps} {...lightbox_nexr_two_image_containerCb} {...lightbox_nexr_two_image_containerIoProps}>
<Div className="p-Home lightbox_third_image_wrapper bpt" {...lightbox_third_image_wrapperProps} {...lightbox_third_image_wrapperCb} {...lightbox_third_image_wrapperIoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Div>
<Div className="p-Home lightbox_fourth_image_wrapper bpt" {...lightbox_fourth_image_wrapperProps} {...lightbox_fourth_image_wrapperCb} {...lightbox_fourth_image_wrapperIoProps}>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Div>
</Flex>
</Flex>
</Div>
<Div className="p-Home experience_section bpt" {...experience_sectionProps} {...experience_sectionCb} {...experience_sectionIoProps}>
<Flex className="p-Home experience_wrapper bpt" {...experience_wrapperProps} {...experience_wrapperCb} {...experience_wrapperIoProps}>
<Div className="p-Home experience_left_wrapper bpt" {...experience_left_wrapperProps} {...experience_left_wrapperCb} {...experience_left_wrapperIoProps}>
<Div className="p-Home experience_heading_wrapper bpt" {...experience_heading_wrapperProps} {...experience_heading_wrapperCb} {...experience_heading_wrapperIoProps}>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Div>
<Div className="p-Home experience_item_container bpt" {...experience_item_containerProps} {...experience_item_containerCb} {...experience_item_containerIoProps}>
<Flex className="p-Home experience_item_wrapper bpt" {...experience_item_wrapperProps} {...experience_item_wrapperCb} {...experience_item_wrapperIoProps}>
<Div className="p-Home experience_item_heading_and_subheading_wrapper bpt" {...experience_item_heading_and_subheading_wrapperProps} {...experience_item_heading_and_subheading_wrapperCb} {...experience_item_heading_and_subheading_wrapperIoProps}>
<Div className="p-Home experience_item_heading_wrapper bpt" {...experience_item_heading_wrapperProps} {...experience_item_heading_wrapperCb} {...experience_item_heading_wrapperIoProps}>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
</Div>
<Div className="p-Home experience_item_subheading_wrapper bpt" {...experience_item_subheading_wrapperProps} {...experience_item_subheading_wrapperCb} {...experience_item_subheading_wrapperIoProps}>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Div>
</Div>
<Flex className="p-Home experience_arrow_and_time_period_wrapper bpt" {...experience_arrow_and_time_period_wrapperProps} {...experience_arrow_and_time_period_wrapperCb} {...experience_arrow_and_time_period_wrapperIoProps}>
<Div className="p-Home experience_time_period_wrapper bpt" {...experience_time_period_wrapperProps} {...experience_time_period_wrapperCb} {...experience_time_period_wrapperIoProps}>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Div>
<Flex className="p-Home experience_arrow_wrapper bpt" {...experience_arrow_wrapperProps} {...experience_arrow_wrapperCb} {...experience_arrow_wrapperIoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex>
</Flex>
<Div className="p-Home experience_gray_bottom_border bpt" {...experience_gray_bottom_borderProps} {...experience_gray_bottom_borderCb} {...experience_gray_bottom_borderIoProps}/>
</Flex>
<Flex className="p-Home experience_item_wrapper_second bpt" {...experience_item_wrapper_secondProps} {...experience_item_wrapper_secondCb} {...experience_item_wrapper_secondIoProps}>
<Div className="p-Home experience_item_heading_and_subheading_wrapper_second bpt" {...experience_item_heading_and_subheading_wrapper_secondProps} {...experience_item_heading_and_subheading_wrapper_secondCb} {...experience_item_heading_and_subheading_wrapper_secondIoProps}>
<Div className="p-Home experience_item_heading_wrapper_second bpt" {...experience_item_heading_wrapper_secondProps} {...experience_item_heading_wrapper_secondCb} {...experience_item_heading_wrapper_secondIoProps}>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
</Div>
<Div className="p-Home experience_item_subheading_wrapper_second bpt" {...experience_item_subheading_wrapper_secondProps} {...experience_item_subheading_wrapper_secondCb} {...experience_item_subheading_wrapper_secondIoProps}>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Div>
</Div>
<Flex className="p-Home experience_arrow_and_time_period_wrapper_second bpt" {...experience_arrow_and_time_period_wrapper_secondProps} {...experience_arrow_and_time_period_wrapper_secondCb} {...experience_arrow_and_time_period_wrapper_secondIoProps}>
<Div className="p-Home experience_time_period_wrapper_second bpt" {...experience_time_period_wrapper_secondProps} {...experience_time_period_wrapper_secondCb} {...experience_time_period_wrapper_secondIoProps}>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Div>
<Flex className="p-Home experience_arrow_wrapper_second bpt" {...experience_arrow_wrapper_secondProps} {...experience_arrow_wrapper_secondCb} {...experience_arrow_wrapper_secondIoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex>
</Flex>
<Div className="p-Home experience_gary_bottom_border_second bpt" {...experience_gary_bottom_border_secondProps} {...experience_gary_bottom_border_secondCb} {...experience_gary_bottom_border_secondIoProps}/>
</Flex>
<Flex className="p-Home experience_item_wrapper_third bpt" {...experience_item_wrapper_thirdProps} {...experience_item_wrapper_thirdCb} {...experience_item_wrapper_thirdIoProps}>
<Div className="p-Home experience_item_heading_and_subheading_wrapper_third bpt" {...experience_item_heading_and_subheading_wrapper_thirdProps} {...experience_item_heading_and_subheading_wrapper_thirdCb} {...experience_item_heading_and_subheading_wrapper_thirdIoProps}>
<Div className="p-Home experience_item_heading_wrapper_third bpt" {...experience_item_heading_wrapper_thirdProps} {...experience_item_heading_wrapper_thirdCb} {...experience_item_heading_wrapper_thirdIoProps}>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
</Div>
<Div className="p-Home experience_item_subheading_wrapper_third bpt" {...experience_item_subheading_wrapper_thirdProps} {...experience_item_subheading_wrapper_thirdCb} {...experience_item_subheading_wrapper_thirdIoProps}>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
</Div>
</Div>
<Flex className="p-Home experience_arrow_and_time_period_wrapper_third bpt" {...experience_arrow_and_time_period_wrapper_thirdProps} {...experience_arrow_and_time_period_wrapper_thirdCb} {...experience_arrow_and_time_period_wrapper_thirdIoProps}>
<Div className="p-Home experience_time_period_wrapper_third bpt" {...experience_time_period_wrapper_thirdProps} {...experience_time_period_wrapper_thirdCb} {...experience_time_period_wrapper_thirdIoProps}>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Div>
<Flex className="p-Home experience_arrow_wrapper_third bpt" {...experience_arrow_wrapper_thirdProps} {...experience_arrow_wrapper_thirdCb} {...experience_arrow_wrapper_thirdIoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
</Flex>
</Flex>
<Div className="p-Home experience_gray_bottom_border_third bpt" {...experience_gray_bottom_border_thirdProps} {...experience_gray_bottom_border_thirdCb} {...experience_gray_bottom_border_thirdIoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home experience_right_wrapper bpt" {...experience_right_wrapperProps} {...experience_right_wrapperCb} {...experience_right_wrapperIoProps}>
<Div className="p-Home experience_right_heading_wrapper bpt" {...experience_right_heading_wrapperProps} {...experience_right_heading_wrapperCb} {...experience_right_heading_wrapperIoProps}>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Div>
<Div className="p-Home experience_right_item_container bpt" {...experience_right_item_containerProps} {...experience_right_item_containerCb} {...experience_right_item_containerIoProps}>
<Flex className="p-Home experience_right_first_item_wrapper bpt" {...experience_right_first_item_wrapperProps} {...experience_right_first_item_wrapperCb} {...experience_right_first_item_wrapperIoProps}>
<Div className="p-Home experience_right_item_heading_and_subheading_first_wrapper bpt" {...experience_right_item_heading_and_subheading_first_wrapperProps} {...experience_right_item_heading_and_subheading_first_wrapperCb} {...experience_right_item_heading_and_subheading_first_wrapperIoProps}>
<Div className="p-Home experience_right_item_heading_wrapper bpt" {...experience_right_item_heading_wrapperProps} {...experience_right_item_heading_wrapperCb} {...experience_right_item_heading_wrapperIoProps}>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
</Div>
<Div className="p-Home experience_right_item_subheading_wrapper bpt" {...experience_right_item_subheading_wrapperProps} {...experience_right_item_subheading_wrapperCb} {...experience_right_item_subheading_wrapperIoProps}>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Div>
</Div>
<Flex className="p-Home experience_right_arrow_and_time_period_first_wrapper bpt" {...experience_right_arrow_and_time_period_first_wrapperProps} {...experience_right_arrow_and_time_period_first_wrapperCb} {...experience_right_arrow_and_time_period_first_wrapperIoProps}>
<Div className="p-Home experience_right_time_period_wrapper bpt" {...experience_right_time_period_wrapperProps} {...experience_right_time_period_wrapperCb} {...experience_right_time_period_wrapperIoProps}>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
</Div>
<Flex className="p-Home experience_right_arrow_wrapper bpt" {...experience_right_arrow_wrapperProps} {...experience_right_arrow_wrapperCb} {...experience_right_arrow_wrapperIoProps}>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Flex>
</Flex>
<Div className="p-Home experience_right_gray_bottom_border_first bpt" {...experience_right_gray_bottom_border_firstProps} {...experience_right_gray_bottom_border_firstCb} {...experience_right_gray_bottom_border_firstIoProps}/>
</Flex>
<Flex className="p-Home experience_right_second_item_wrapper bpt" {...experience_right_second_item_wrapperProps} {...experience_right_second_item_wrapperCb} {...experience_right_second_item_wrapperIoProps}>
<Div className="p-Home experience_right_item_heading_and_subheading_second_wrapper bpt" {...experience_right_item_heading_and_subheading_second_wrapperProps} {...experience_right_item_heading_and_subheading_second_wrapperCb} {...experience_right_item_heading_and_subheading_second_wrapperIoProps}>
<Div className="p-Home experience_right_item_second_heading_wrapper bpt" {...experience_right_item_second_heading_wrapperProps} {...experience_right_item_second_heading_wrapperCb} {...experience_right_item_second_heading_wrapperIoProps}>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
</Div>
<Div className="p-Home experience_right_item_subheading_second_wrapper bpt" {...experience_right_item_subheading_second_wrapperProps} {...experience_right_item_subheading_second_wrapperCb} {...experience_right_item_subheading_second_wrapperIoProps}>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Div>
</Div>
<Flex className="p-Home experience_right_arrow_and_time_period_second_wrapper bpt" {...experience_right_arrow_and_time_period_second_wrapperProps} {...experience_right_arrow_and_time_period_second_wrapperCb} {...experience_right_arrow_and_time_period_second_wrapperIoProps}>
<Div className="p-Home experience_right_time_period_second_wrapper bpt" {...experience_right_time_period_second_wrapperProps} {...experience_right_time_period_second_wrapperCb} {...experience_right_time_period_second_wrapperIoProps}>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Div>
<Flex className="p-Home experience_right_arrow_second_wrapper bpt" {...experience_right_arrow_second_wrapperProps} {...experience_right_arrow_second_wrapperCb} {...experience_right_arrow_second_wrapperIoProps}>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
</Flex>
</Flex>
<Div className="p-Home experience_right_gray_bottom_second_wrapper bpt" {...experience_right_gray_bottom_second_wrapperProps} {...experience_right_gray_bottom_second_wrapperCb} {...experience_right_gray_bottom_second_wrapperIoProps}/>
</Flex>
<Flex className="p-Home experience_right_third_item_wrapper bpt" {...experience_right_third_item_wrapperProps} {...experience_right_third_item_wrapperCb} {...experience_right_third_item_wrapperIoProps}>
<Div className="p-Home experience_right_item_heading_and_subheading_third_wrapper bpt" {...experience_right_item_heading_and_subheading_third_wrapperProps} {...experience_right_item_heading_and_subheading_third_wrapperCb} {...experience_right_item_heading_and_subheading_third_wrapperIoProps}>
<Div className="p-Home experience_right_item_heading_third_wrapper bpt" {...experience_right_item_heading_third_wrapperProps} {...experience_right_item_heading_third_wrapperCb} {...experience_right_item_heading_third_wrapperIoProps}>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Div>
<Div className="p-Home experience_right_item_subheading_third_wrapper bpt" {...experience_right_item_subheading_third_wrapperProps} {...experience_right_item_subheading_third_wrapperCb} {...experience_right_item_subheading_third_wrapperIoProps}>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Div>
</Div>
<Flex className="p-Home experience_right_arrow_and_time_period_third_wrapper bpt" {...experience_right_arrow_and_time_period_third_wrapperProps} {...experience_right_arrow_and_time_period_third_wrapperCb} {...experience_right_arrow_and_time_period_third_wrapperIoProps}>
<Div className="p-Home experience_right_time_period_third_wrapper bpt" {...experience_right_time_period_third_wrapperProps} {...experience_right_time_period_third_wrapperCb} {...experience_right_time_period_third_wrapperIoProps}>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Div>
<Flex className="p-Home experience_right_arrow_third_wrapper bpt" {...experience_right_arrow_third_wrapperProps} {...experience_right_arrow_third_wrapperCb} {...experience_right_arrow_third_wrapperIoProps}>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
</Flex>
</Flex>
<Div className="p-Home experience_right_gary_bottom_third_border bpt" {...experience_right_gary_bottom_third_borderProps} {...experience_right_gary_bottom_third_borderCb} {...experience_right_gary_bottom_third_borderIoProps}/>
</Flex>
</Div>
</Div>
</Flex>
</Div>
<Div className="p-Home testimonial_section bpt" {...testimonial_sectionProps} {...testimonial_sectionCb} {...testimonial_sectionIoProps}>
<Flex className="p-Home testimonial_headings_wrapper bpt" {...testimonial_headings_wrapperProps} {...testimonial_headings_wrapperCb} {...testimonial_headings_wrapperIoProps}>
<Div className="p-Home testimonial_heading_subtext_wrapper bpt" {...testimonial_heading_subtext_wrapperProps} {...testimonial_heading_subtext_wrapperCb} {...testimonial_heading_subtext_wrapperIoProps}>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Div>
<Div className="p-Home testimonial_heading_wrapper bpt" {...testimonial_heading_wrapperProps} {...testimonial_heading_wrapperCb} {...testimonial_heading_wrapperIoProps}>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Div>
</Flex>
<Flex className="p-Home testimonial_down_wrapper bpt" {...testimonial_down_wrapperProps} {...testimonial_down_wrapperCb} {...testimonial_down_wrapperIoProps}>
<Div className="p-Home testimonial_slider bpt" {...testimonial_sliderProps} {...testimonial_sliderCb} {...testimonial_sliderIoProps}>
<Flex className="p-Home testimonial_container bpt" {...testimonial_containerProps} {...testimonial_containerCb} {...testimonial_containerIoProps}>
<Div className="p-Home testimonial_image_wrapper bpt" {...testimonial_image_wrapperProps} {...testimonial_image_wrapperCb} {...testimonial_image_wrapperIoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Div>
<Div className="p-Home testimonial_content bpt" {...testimonial_contentProps} {...testimonial_contentCb} {...testimonial_contentIoProps}>
<Div className="p-Home testimonial_quote_item_wrapper bpt" {...testimonial_quote_item_wrapperProps} {...testimonial_quote_item_wrapperCb} {...testimonial_quote_item_wrapperIoProps}>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Div>
<Div className="p-Home testimonial_content_wrapper bpt" {...testimonial_content_wrapperProps} {...testimonial_content_wrapperCb} {...testimonial_content_wrapperIoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
</Div>
<Div className="p-Home testimonial_name_and_position_wrapper bpt" {...testimonial_name_and_position_wrapperProps} {...testimonial_name_and_position_wrapperCb} {...testimonial_name_and_position_wrapperIoProps}>
<Div className="p-Home testimonial_name_wrapper bpt" {...testimonial_name_wrapperProps} {...testimonial_name_wrapperCb} {...testimonial_name_wrapperIoProps}>
<Div className="p-Home testimonial_name bpt" {...testimonial_nameProps} {...testimonial_nameCb} {...testimonial_nameIoProps}>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
</Div>
<Div className="p-Home testimonial_desc bpt" {...testimonial_descProps} {...testimonial_descCb} {...testimonial_descIoProps}>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
</Div>
</Div>
</Div>
</Div>
</Flex>
<Flex className="p-Home testimonial_left_arrow bpt" {...testimonial_left_arrowProps} {...testimonial_left_arrowCb} {...testimonial_left_arrowIoProps}>
<Flex className="p-Home testimonial_left_arrow_icon_wrapper bpt" {...testimonial_left_arrow_icon_wrapperProps} {...testimonial_left_arrow_icon_wrapperCb} {...testimonial_left_arrow_icon_wrapperIoProps}>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home testimonial_right_arrow bpt" {...testimonial_right_arrowProps} {...testimonial_right_arrowCb} {...testimonial_right_arrowIoProps}>
<Flex className="p-Home testimonial_right_arrow_icon_wrapper bpt" {...testimonial_right_arrow_icon_wrapperProps} {...testimonial_right_arrow_icon_wrapperCb} {...testimonial_right_arrow_icon_wrapperIoProps}>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Div>
<Div className="p-Home faq_section bpt" {...faq_sectionProps} {...faq_sectionCb} {...faq_sectionIoProps}>
<Flex className="p-Home faq_header bpt" {...faq_headerProps} {...faq_headerCb} {...faq_headerIoProps}>
<Div className="p-Home faq_subtext_wrapper bpt" {...faq_subtext_wrapperProps} {...faq_subtext_wrapperCb} {...faq_subtext_wrapperIoProps}>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
</Div>
<Div className="p-Home faq_heading_wrapper bpt" {...faq_heading_wrapperProps} {...faq_heading_wrapperCb} {...faq_heading_wrapperIoProps}>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
</Div>
</Flex>
<Flex className="p-Home faq_down bpt" {...faq_downProps} {...faq_downCb} {...faq_downIoProps}>
<Flex className="p-Home faq_container bpt" {...faq_containerProps} {...faq_containerCb} {...faq_containerIoProps}>
<Div className="p-Home faq_left bpt" {...faq_leftProps} {...faq_leftCb} {...faq_leftIoProps}>
<Div className="p-Home faq_item_first bpt" {...faq_item_firstProps} {...faq_item_firstCb} {...faq_item_firstIoProps}>
<Flex className="p-Home faq_question_and_arrow_wrapper bpt" {...faq_question_and_arrow_wrapperProps} {...faq_question_and_arrow_wrapperCb} {...faq_question_and_arrow_wrapperIoProps}>
<Div className="p-Home faq_question_wrapper bpt" {...faq_question_wrapperProps} {...faq_question_wrapperCb} {...faq_question_wrapperIoProps}>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
</Div>
<Flex className="p-Home faq_icon_wrapper bpt" {...faq_icon_wrapperProps} {...faq_icon_wrapperCb} {...faq_icon_wrapperIoProps}>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home faq_item_second bpt" {...faq_item_secondProps} {...faq_item_secondCb} {...faq_item_secondIoProps}>
<Flex className="p-Home faq_question_and_arrow_wrapper_second bpt" {...faq_question_and_arrow_wrapper_secondProps} {...faq_question_and_arrow_wrapper_secondCb} {...faq_question_and_arrow_wrapper_secondIoProps}>
<Div className="p-Home faq_question_wrapper_second bpt" {...faq_question_wrapper_secondProps} {...faq_question_wrapper_secondCb} {...faq_question_wrapper_secondIoProps}>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Div>
<Flex className="p-Home faq_icon_wrapper_second bpt" {...faq_icon_wrapper_secondProps} {...faq_icon_wrapper_secondCb} {...faq_icon_wrapper_secondIoProps}>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home faq_item_third bpt" {...faq_item_thirdProps} {...faq_item_thirdCb} {...faq_item_thirdIoProps}>
<Flex className="p-Home faq_question_and_arrow_wrapper_third bpt" {...faq_question_and_arrow_wrapper_thirdProps} {...faq_question_and_arrow_wrapper_thirdCb} {...faq_question_and_arrow_wrapper_thirdIoProps}>
<Div className="p-Home faq_question_wrapper_third bpt" {...faq_question_wrapper_thirdProps} {...faq_question_wrapper_thirdCb} {...faq_question_wrapper_thirdIoProps}>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
</Div>
<Flex className="p-Home faq_icon_wrapper_third bpt" {...faq_icon_wrapper_thirdProps} {...faq_icon_wrapper_thirdCb} {...faq_icon_wrapper_thirdIoProps}>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home faq_item_fourth bpt" {...faq_item_fourthProps} {...faq_item_fourthCb} {...faq_item_fourthIoProps}>
<Flex className="p-Home faq_question_and_arrow_wrapper_fourth bpt" {...faq_question_and_arrow_wrapper_fourthProps} {...faq_question_and_arrow_wrapper_fourthCb} {...faq_question_and_arrow_wrapper_fourthIoProps}>
<Div className="p-Home faq_question_wrapper_fourth bpt" {...faq_question_wrapper_fourthProps} {...faq_question_wrapper_fourthCb} {...faq_question_wrapper_fourthIoProps}>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
</Div>
<Flex className="p-Home faq_icon_wrapper_fourth bpt" {...faq_icon_wrapper_fourthProps} {...faq_icon_wrapper_fourthCb} {...faq_icon_wrapper_fourthIoProps}>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Flex>
</Flex>
</Div>
</Div>
<Div className="p-Home faq_right bpt" {...faq_rightProps} {...faq_rightCb} {...faq_rightIoProps}>
<Div className="p-Home faq_right_item_first bpt" {...faq_right_item_firstProps} {...faq_right_item_firstCb} {...faq_right_item_firstIoProps}>
<Flex className="p-Home faq_question_and_arrow_wrapper_right_first bpt" {...faq_question_and_arrow_wrapper_right_firstProps} {...faq_question_and_arrow_wrapper_right_firstCb} {...faq_question_and_arrow_wrapper_right_firstIoProps}>
<Div className="p-Home faq_question_wrapper_right_first bpt" {...faq_question_wrapper_right_firstProps} {...faq_question_wrapper_right_firstCb} {...faq_question_wrapper_right_firstIoProps}>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
</Div>
<Flex className="p-Home faq_icon_wrapper_right_first bpt" {...faq_icon_wrapper_right_firstProps} {...faq_icon_wrapper_right_firstCb} {...faq_icon_wrapper_right_firstIoProps}>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home faq_right_item_second bpt" {...faq_right_item_secondProps} {...faq_right_item_secondCb} {...faq_right_item_secondIoProps}>
<Flex className="p-Home faq_question_and_arrow_wrapper_right_second bpt" {...faq_question_and_arrow_wrapper_right_secondProps} {...faq_question_and_arrow_wrapper_right_secondCb} {...faq_question_and_arrow_wrapper_right_secondIoProps}>
<Div className="p-Home faq_question_wrapper_right_second bpt" {...faq_question_wrapper_right_secondProps} {...faq_question_wrapper_right_secondCb} {...faq_question_wrapper_right_secondIoProps}>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
</Div>
<Flex className="p-Home faq_icon_wrapper_right_second bpt" {...faq_icon_wrapper_right_secondProps} {...faq_icon_wrapper_right_secondCb} {...faq_icon_wrapper_right_secondIoProps}>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home faq_right_item_third bpt" {...faq_right_item_thirdProps} {...faq_right_item_thirdCb} {...faq_right_item_thirdIoProps}>
<Flex className="p-Home faq_question_and_arrow_wrapper_right_third bpt" {...faq_question_and_arrow_wrapper_right_thirdProps} {...faq_question_and_arrow_wrapper_right_thirdCb} {...faq_question_and_arrow_wrapper_right_thirdIoProps}>
<Div className="p-Home faq_question_wrapper_right_third bpt" {...faq_question_wrapper_right_thirdProps} {...faq_question_wrapper_right_thirdCb} {...faq_question_wrapper_right_thirdIoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
</Div>
<Flex className="p-Home faq_icon_wrapper_right_third bpt" {...faq_icon_wrapper_right_thirdProps} {...faq_icon_wrapper_right_thirdCb} {...faq_icon_wrapper_right_thirdIoProps}>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home faq_right_item_fourth bpt" {...faq_right_item_fourthProps} {...faq_right_item_fourthCb} {...faq_right_item_fourthIoProps}>
<Flex className="p-Home faq_question_and_arrow_wrapper_right_fourth bpt" {...faq_question_and_arrow_wrapper_right_fourthProps} {...faq_question_and_arrow_wrapper_right_fourthCb} {...faq_question_and_arrow_wrapper_right_fourthIoProps}>
<Div className="p-Home faq_question_wrapper_right_fourth bpt" {...faq_question_wrapper_right_fourthProps} {...faq_question_wrapper_right_fourthCb} {...faq_question_wrapper_right_fourthIoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Div>
<Flex className="p-Home faq_icon_wrapper_right_fourth bpt" {...faq_icon_wrapper_right_fourthProps} {...faq_icon_wrapper_right_fourthCb} {...faq_icon_wrapper_right_fourthIoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
</Flex>
</Flex>
</Div>
</Div>
</Flex>
</Flex>
</Div>
<Div className="p-Home footer_section bpt" {...footer_sectionProps} {...footer_sectionCb} {...footer_sectionIoProps}>
<Flex className="p-Home footer_wrapper bpt" {...footer_wrapperProps} {...footer_wrapperCb} {...footer_wrapperIoProps}>
<Flex className="p-Home footer_heading_wrapper bpt" {...footer_heading_wrapperProps} {...footer_heading_wrapperCb} {...footer_heading_wrapperIoProps}>
<TextBox className="p-Home footer_heading bpt" {...footer_headingProps} {...footer_headingCb} {...footer_headingIoProps}/>
<Div className="p-Home footer_cta bpt" {...footer_ctaProps} {...footer_ctaCb} {...footer_ctaIoProps}>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Div>
</Flex>
<Flex className="p-Home footer_address_and_link_wrapper bpt" {...footer_address_and_link_wrapperProps} {...footer_address_and_link_wrapperCb} {...footer_address_and_link_wrapperIoProps}>
<Div className="p-Home footer_address_wrapper bpt" {...footer_address_wrapperProps} {...footer_address_wrapperCb} {...footer_address_wrapperIoProps}>
<Div className="p-Home footer_logo_wrap bpt" {...footer_logo_wrapProps} {...footer_logo_wrapCb} {...footer_logo_wrapIoProps}>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
</Div>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
<Flex className="p-Home contact_email_footer bpt" {...contact_email_footerProps} {...contact_email_footerCb} {...contact_email_footerIoProps}>
<Flex className="p-Home email_image_footer_wrapper bpt" {...email_image_footer_wrapperProps} {...email_image_footer_wrapperCb} {...email_image_footer_wrapperIoProps}>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Flex>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
</Flex>
</Div>
<Flex className="p-Home footer_links bpt" {...footer_linksProps} {...footer_linksCb} {...footer_linksIoProps}>
<Div className="p-Home footer_about bpt" {...footer_aboutProps} {...footer_aboutCb} {...footer_aboutIoProps}>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
</Div>
<Div className="p-Home footer_services bpt" {...footer_servicesProps} {...footer_servicesCb} {...footer_servicesIoProps}>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Div>
<Div className="p-Home experience_footer bpt" {...experience_footerProps} {...experience_footerCb} {...experience_footerIoProps}>
<TextBox className="p-Home experience_footer_text bpt" {...experience_footer_textProps} {...experience_footer_textCb} {...experience_footer_textIoProps}/>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
</Div>
</Flex>
</Flex>
<Div className="p-Home sub_footer_wrapper bpt" {...sub_footer_wrapperProps} {...sub_footer_wrapperCb} {...sub_footer_wrapperIoProps}>
<Div className="p-Home sub_footer_text bpt" {...sub_footer_textProps} {...sub_footer_textCb} {...sub_footer_textIoProps}>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
</Div>
</Div>
</Flex>
</Div>
<Div className="p-Home FALSE_DIV_REJECTED_IGNORE bpt" {...FALSE_DIV_REJECTED_IGNOREProps} {...FALSE_DIV_REJECTED_IGNORECb} {...FALSE_DIV_REJECTED_IGNOREIoProps}>
<Div className="p-Home Div184 bpt" {...Div184Props} {...Div184Cb} {...Div184IoProps}>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Div>
<Flex className="p-Home false_spare bpt" {...false_spareProps} {...false_spareCb} {...false_spareIoProps}>
<Image className="p-Home second_image_contain bpt" {...second_image_containProps} {...second_image_containCb} {...second_image_containIoProps}/>
</Flex>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<Div className="p-Home Div65 bpt" {...Div65Props} {...Div65Cb} {...Div65IoProps}>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Div className="p-Home Div64 bpt" {...Div64Props} {...Div64Cb} {...Div64IoProps}/>
<Div className="p-Home Div63 bpt" {...Div63Props} {...Div63Cb} {...Div63IoProps}>
<Div className="p-Home Div62 bpt" {...Div62Props} {...Div62Cb} {...Div62IoProps}/>
<Div className="p-Home Div61 bpt" {...Div61Props} {...Div61Cb} {...Div61IoProps}>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
</Div>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Div>
</Div>
  </>);
}
