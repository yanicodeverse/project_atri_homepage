import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "navbar": {
      "callbacks": {}
    },
    "wrapper_nav": {
      "callbacks": {}
    },
    "home_hero_section": {
      "callbacks": {}
    },
    "wrapper_home_hero": {
      "callbacks": {}
    },
    "home_hero_content_wrapper": {
      "callbacks": {}
    },
    "hero_home_heading_wrapper": {
      "callbacks": {}
    },
    "home_hero_paragraph_wrapper": {
      "callbacks": {}
    },
    "Div8": {
      "callbacks": {}
    },
    "home_hero_button_wrapper": {
      "callbacks": {}
    },
    "button_inline_block": {
      "callbacks": {}
    },
    "hero_link_wrapper": {
      "callbacks": {}
    },
    "home_hero_image_wrapper": {
      "callbacks": {}
    },
    "trusted_bt_section": {
      "callbacks": {}
    },
    "trusted_by_wrapper": {
      "callbacks": {}
    },
    "trusted_by_text_wrapper": {
      "callbacks": {}
    },
    "trusted_logo_flexbox": {
      "callbacks": {}
    },
    "trusted_image_one": {
      "callbacks": {}
    },
    "trusted_image_two": {
      "callbacks": {}
    },
    "trusted_image_four": {
      "callbacks": {}
    },
    "trusted_image_third": {
      "callbacks": {}
    },
    "service_section": {
      "callbacks": {}
    },
    "service_wrapper": {
      "callbacks": {}
    },
    "service_heading_and_text_wrapper": {
      "callbacks": {}
    },
    "service_sub_text_wrapper": {
      "callbacks": {}
    },
    "service_heading_wrapper": {
      "callbacks": {}
    },
    "services_flexbox": {
      "callbacks": {}
    },
    "service_wrapper_first": {
      "callbacks": {}
    },
    "service_item_icon_wrapper": {
      "callbacks": {}
    },
    "service_item_heading_wrapper": {
      "callbacks": {}
    },
    "service_item_paragraph_wrapper": {
      "callbacks": {}
    },
    "service_pointer_wrapper": {
      "callbacks": {}
    },
    "service_pointer_item": {
      "callbacks": {}
    },
    "service_pointer_item_two": {
      "callbacks": {}
    },
    "service_pointer_item_three": {
      "callbacks": {}
    },
    "real_second_service_wrapper": {
      "callbacks": {}
    },
    "second_service_pointer_three": {
      "callbacks": {}
    },
    "second_service_pointer_two": {
      "callbacks": {}
    },
    "second_service_pointer_one": {
      "callbacks": {}
    },
    "itemText1": {
      "callbacks": {}
    },
    "real_second_service_item_paragraph_wrapper": {
      "callbacks": {}
    },
    "real_second_service_heading": {
      "callbacks": {}
    },
    "real_second_service_item_icon_wrapper": {
      "callbacks": {}
    },
    "service_wrapper_third": {
      "callbacks": {}
    },
    "third_service_pointer_wrapper_three": {
      "callbacks": {}
    },
    "third_service_pointer_wrapper_two": {
      "callbacks": {}
    },
    "third_service_pointer_wrapper_one": {
      "callbacks": {}
    },
    "third_service_pointer_one": {
      "callbacks": {}
    },
    "third_service_item_paragraph_wrapper": {
      "callbacks": {}
    },
    "third_service_item_heading_wrapper": {
      "callbacks": {}
    },
    "third_service_item_icon_wrapper": {
      "callbacks": {}
    },
    "case_studies_section": {
      "callbacks": {}
    },
    "case_studies_heading_wrapper": {
      "callbacks": {}
    },
    "case_studies_heading_and_subText_wrapper": {
      "callbacks": {}
    },
    "case_studies_subText_wrapper": {
      "callbacks": {}
    },
    "case_studies_main_heading": {
      "callbacks": {}
    },
    "project_slider": {
      "callbacks": {}
    },
    "first_slider": {
      "callbacks": {}
    },
    "project_slider_mask": {
      "callbacks": {}
    },
    "first_project_slide": {
      "callbacks": {}
    },
    "w_dyn_list": {
      "callbacks": {}
    },
    "project_slide_link_block": {
      "callbacks": {}
    },
    "project_slide_image_wrapper": {
      "callbacks": {}
    },
    "project_slide_content": {
      "callbacks": {}
    },
    "project_slide_tag_wrapper": {
      "callbacks": {}
    },
    "project_slide_main_heading": {
      "callbacks": {}
    },
    "viwe_project_div": {
      "callbacks": {}
    },
    "view_project_arrow": {
      "callbacks": {}
    },
    "second_slider": {
      "callbacks": {}
    },
    "second_project_slider_mask": {
      "callbacks": {}
    },
    "second_project_slide": {
      "callbacks": {}
    },
    "second_w_dyn_list": {
      "callbacks": {}
    },
    "second_project_slide_link_block": {
      "callbacks": {}
    },
    "second_project_slide_content": {
      "callbacks": {}
    },
    "second_view_project_div": {
      "callbacks": {}
    },
    "second_view_project_arrow": {
      "callbacks": {}
    },
    "second_project_slide_main_heading": {
      "callbacks": {}
    },
    "second_project_tag_wrapper": {
      "callbacks": {}
    },
    "second_project_slide_image_wrapper": {
      "callbacks": {}
    },
    "project_slider_left_arrow": {
      "callbacks": {}
    },
    "project_arrow_left_arrow_icon_wrapper": {
      "callbacks": {}
    },
    "project_slider_right_arrow": {
      "callbacks": {}
    },
    "project_arrow_right_icon_wrapper": {
      "callbacks": {}
    },
    "FALSE_DIV_REJECTED_IGNORE": {
      "callbacks": {}
    },
    "Div65": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Div63": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Div61": {
      "callbacks": {}
    },
    "false_spare": {
      "callbacks": {}
    },
    "Div184": {
      "callbacks": {}
    },
    "blog_section": {
      "callbacks": {}
    },
    "blog_homepage_wrapper": {
      "callbacks": {}
    },
    "blog_heading_and_subtext_wrapper": {
      "callbacks": {}
    },
    "blog_item_read_the_article_wrapper": {
      "callbacks": {}
    },
    "blog_item_read_the_article_text_wrapper": {
      "callbacks": {}
    },
    "blog_item_arrow_wrapper": {
      "callbacks": {}
    },
    "blog_subtext_main": {
      "callbacks": {}
    },
    "blog_heading_wrapper": {
      "callbacks": {}
    },
    "blog_content_wrapper": {
      "callbacks": {}
    },
    "blog_dyn_item_first": {
      "callbacks": {}
    },
    "blog_section_blog_item_first": {
      "callbacks": {}
    },
    "blog_item_date_and_time_wrapper": {
      "callbacks": {}
    },
    "blog_item_date_wrapper": {
      "callbacks": {}
    },
    "blog_item_time_wrapper": {
      "callbacks": {}
    },
    "blog_item_heading_wrapper": {
      "callbacks": {}
    },
    "blog_read_the_article_wrapper": {
      "callbacks": {}
    },
    "read_the_article_text": {
      "callbacks": {}
    },
    "read_article_white_arrow": {
      "callbacks": {}
    },
    "blog_dyn_second_item": {
      "callbacks": {}
    },
    "blog_section_blog_item_second": {
      "callbacks": {}
    },
    "blog_read_the_article_second": {
      "callbacks": {}
    },
    "read_article_white_arrow_second": {
      "callbacks": {}
    },
    "read_the_article_text_second": {
      "callbacks": {}
    },
    "blog_section_heading_wrapper_second": {
      "callbacks": {}
    },
    "blog_section_date_and_time_wrapper_second": {
      "callbacks": {}
    },
    "blog_item_time_wrapper_second": {
      "callbacks": {}
    },
    "blog_item_date_wrapper_second": {
      "callbacks": {}
    },
    "blog_dyn_third_item": {
      "callbacks": {}
    },
    "blog_section_blog_item_third": {
      "callbacks": {}
    },
    "blog_read_the_article_third": {
      "callbacks": {}
    },
    "read_article_white_arrow_third": {
      "callbacks": {}
    },
    "read_the_article_text_third": {
      "callbacks": {}
    },
    "blog_section_heading_wrapper_third": {
      "callbacks": {}
    },
    "blog_section_date_and_time_wrapper_third": {
      "callbacks": {}
    },
    "blog_item_time_wrapper_third": {
      "callbacks": {}
    },
    "blog_item_date_wrapper_third": {
      "callbacks": {}
    },
    "blog_dyn_fourth_item": {
      "callbacks": {}
    },
    "blog_section_blog_item_fourth": {
      "callbacks": {}
    },
    "blog_read_the_article_fourth": {
      "callbacks": {}
    },
    "read_article_white_arrow_fourth": {
      "callbacks": {}
    },
    "read_the_article_fourth": {
      "callbacks": {}
    },
    "blog_section_heading_wrapper_fourth": {
      "callbacks": {}
    },
    "blog_section_date_and_time_wrapper_fourth": {
      "callbacks": {}
    },
    "blog_item_time_wrapper_fourth": {
      "callbacks": {}
    },
    "blog_item_date_wrapper_fourth": {
      "callbacks": {}
    },
    "blog_dyn_fifth_item": {
      "callbacks": {}
    },
    "blog_section_blog_item_fifth": {
      "callbacks": {}
    },
    "blog_read_the_article_fifth": {
      "callbacks": {}
    },
    "read_article_white_arrow_fifth": {
      "callbacks": {}
    },
    "read_the_article_fifth": {
      "callbacks": {}
    },
    "blog_section_heading_wrapper_fifth": {
      "callbacks": {}
    },
    "blog_section_date_and_time_wrapper_fifth": {
      "callbacks": {}
    },
    "blog_item_time_wrapper_fifth": {
      "callbacks": {}
    },
    "blog_item_date_wrapper_fifth": {
      "callbacks": {}
    },
    "about_section": {
      "callbacks": {}
    },
    "about_wrapper": {
      "callbacks": {}
    },
    "about_heading_and_subtext_wrapper": {
      "callbacks": {}
    },
    "about_subtext_wrapper": {
      "callbacks": {}
    },
    "about_heading_wrapper": {
      "callbacks": {}
    },
    "about_content_wrapper": {
      "callbacks": {}
    },
    "lightbox": {
      "callbacks": {}
    },
    "lightbox_second_image_wrapper": {
      "callbacks": {}
    },
    "ligthbox_first_image_wrapper": {
      "callbacks": {}
    },
    "lightbox_nexr_two_image_container": {
      "callbacks": {}
    },
    "lightbox_third_image_wrapper": {
      "callbacks": {}
    },
    "lightbox_fourth_image_wrapper": {
      "callbacks": {}
    },
    "experience_section": {
      "callbacks": {}
    },
    "experience_wrapper": {
      "callbacks": {}
    },
    "experience_left_wrapper": {
      "callbacks": {}
    },
    "experience_heading_wrapper": {
      "callbacks": {}
    },
    "experience_item_container": {
      "callbacks": {}
    },
    "experience_item_wrapper": {
      "callbacks": {}
    },
    "experience_item_heading_and_subheading_wrapper": {
      "callbacks": {}
    },
    "experience_item_heading_wrapper": {
      "callbacks": {}
    },
    "experience_item_subheading_wrapper": {
      "callbacks": {}
    },
    "experience_arrow_and_time_period_wrapper": {
      "callbacks": {}
    },
    "experience_time_period_wrapper": {
      "callbacks": {}
    },
    "experience_arrow_wrapper": {
      "callbacks": {}
    },
    "experience_item_wrapper_second": {
      "callbacks": {}
    },
    "experience_arrow_and_time_period_wrapper_second": {
      "callbacks": {}
    },
    "experience_arrow_wrapper_second": {
      "callbacks": {}
    },
    "experience_time_period_wrapper_second": {
      "callbacks": {}
    },
    "experience_item_heading_and_subheading_wrapper_second": {
      "callbacks": {}
    },
    "experience_item_subheading_wrapper_second": {
      "callbacks": {}
    },
    "experience_item_heading_wrapper_second": {
      "callbacks": {}
    },
    "experience_item_wrapper_third": {
      "callbacks": {}
    },
    "experience_arrow_and_time_period_wrapper_third": {
      "callbacks": {}
    },
    "experience_arrow_wrapper_third": {
      "callbacks": {}
    },
    "experience_time_period_wrapper_third": {
      "callbacks": {}
    },
    "experience_item_heading_and_subheading_wrapper_third": {
      "callbacks": {}
    },
    "experience_item_subheading_wrapper_third": {
      "callbacks": {}
    },
    "experience_item_heading_wrapper_third": {
      "callbacks": {}
    },
    "experience_right_wrapper": {
      "callbacks": {}
    },
    "experience_right_item_container": {
      "callbacks": {}
    },
    "experience_right_third_item_wrapper": {
      "callbacks": {}
    },
    "experience_right_item_heading_and_subheading_third_wrapper": {
      "callbacks": {}
    },
    "experience_right_item_heading_third_wrapper": {
      "callbacks": {}
    },
    "experience_right_item_subheading_third_wrapper": {
      "callbacks": {}
    },
    "experience_right_arrow_and_time_period_third_wrapper": {
      "callbacks": {}
    },
    "experience_right_time_period_third_wrapper": {
      "callbacks": {}
    },
    "experience_right_arrow_third_wrapper": {
      "callbacks": {}
    },
    "experience_right_second_item_wrapper": {
      "callbacks": {}
    },
    "experience_right_item_heading_and_subheading_second_wrapper": {
      "callbacks": {}
    },
    "experience_right_item_second_heading_wrapper": {
      "callbacks": {}
    },
    "experience_right_item_subheading_second_wrapper": {
      "callbacks": {}
    },
    "experience_right_arrow_and_time_period_second_wrapper": {
      "callbacks": {}
    },
    "experience_right_time_period_second_wrapper": {
      "callbacks": {}
    },
    "experience_right_arrow_second_wrapper": {
      "callbacks": {}
    },
    "experience_right_first_item_wrapper": {
      "callbacks": {}
    },
    "experience_right_arrow_and_time_period_first_wrapper": {
      "callbacks": {}
    },
    "experience_right_arrow_wrapper": {
      "callbacks": {}
    },
    "experience_right_time_period_wrapper": {
      "callbacks": {}
    },
    "experience_right_item_heading_and_subheading_first_wrapper": {
      "callbacks": {}
    },
    "experience_right_item_subheading_wrapper": {
      "callbacks": {}
    },
    "experience_right_item_heading_wrapper": {
      "callbacks": {}
    },
    "experience_right_heading_wrapper": {
      "callbacks": {}
    },
    "testimonial_section": {
      "callbacks": {}
    },
    "testimonial_headings_wrapper": {
      "callbacks": {}
    },
    "testimonial_heading_subtext_wrapper": {
      "callbacks": {}
    },
    "testimonial_heading_wrapper": {
      "callbacks": {}
    },
    "testimonial_down_wrapper": {
      "callbacks": {}
    },
    "testimonial_slider": {
      "callbacks": {}
    },
    "testimonial_container": {
      "callbacks": {}
    },
    "testimonial_image_wrapper": {
      "callbacks": {}
    },
    "testimonial_content": {
      "callbacks": {}
    },
    "testimonial_quote_item_wrapper": {
      "callbacks": {}
    },
    "testimonial_content_wrapper": {
      "callbacks": {}
    },
    "testimonial_name_and_position_wrapper": {
      "callbacks": {}
    },
    "testimonial_name_wrapper": {
      "callbacks": {}
    },
    "testimonial_name": {
      "callbacks": {}
    },
    "testimonial_desc": {
      "callbacks": {}
    },
    "testimonial_left_arrow": {
      "callbacks": {}
    },
    "testimonial_left_arrow_icon_wrapper": {
      "callbacks": {}
    },
    "testimonial_right_arrow": {
      "callbacks": {}
    },
    "testimonial_right_arrow_icon_wrapper": {
      "callbacks": {}
    },
    "faq_section": {
      "callbacks": {}
    },
    "faq_header": {
      "callbacks": {}
    },
    "faq_subtext_wrapper": {
      "callbacks": {}
    },
    "faq_heading_wrapper": {
      "callbacks": {}
    },
    "faq_down": {
      "callbacks": {}
    },
    "faq_container": {
      "callbacks": {}
    },
    "faq_left": {
      "callbacks": {}
    },
    "faq_item_first": {
      "callbacks": {}
    },
    "faq_question_and_arrow_wrapper": {
      "callbacks": {}
    },
    "faq_question_wrapper": {
      "callbacks": {}
    },
    "faq_icon_wrapper": {
      "callbacks": {}
    },
    "faq_item_second": {
      "callbacks": {}
    },
    "faq_question_and_arrow_wrapper_second": {
      "callbacks": {}
    },
    "faq_icon_wrapper_second": {
      "callbacks": {}
    },
    "faq_question_wrapper_second": {
      "callbacks": {}
    },
    "faq_item_third": {
      "callbacks": {}
    },
    "faq_question_and_arrow_wrapper_third": {
      "callbacks": {}
    },
    "faq_icon_wrapper_third": {
      "callbacks": {}
    },
    "faq_question_wrapper_third": {
      "callbacks": {}
    },
    "faq_item_fourth": {
      "callbacks": {}
    },
    "faq_question_and_arrow_wrapper_fourth": {
      "callbacks": {}
    },
    "faq_icon_wrapper_fourth": {
      "callbacks": {}
    },
    "faq_question_wrapper_fourth": {
      "callbacks": {}
    },
    "faq_right": {
      "callbacks": {}
    },
    "faq_right_item_fourth": {
      "callbacks": {}
    },
    "faq_question_and_arrow_wrapper_right_fourth": {
      "callbacks": {}
    },
    "faq_question_wrapper_right_fourth": {
      "callbacks": {}
    },
    "faq_icon_wrapper_right_fourth": {
      "callbacks": {}
    },
    "faq_right_item_third": {
      "callbacks": {}
    },
    "faq_question_and_arrow_wrapper_right_third": {
      "callbacks": {}
    },
    "faq_question_wrapper_right_third": {
      "callbacks": {}
    },
    "faq_icon_wrapper_right_third": {
      "callbacks": {}
    },
    "faq_right_item_second": {
      "callbacks": {}
    },
    "faq_question_and_arrow_wrapper_right_second": {
      "callbacks": {}
    },
    "faq_question_wrapper_right_second": {
      "callbacks": {}
    },
    "faq_icon_wrapper_right_second": {
      "callbacks": {}
    },
    "faq_right_item_first": {
      "callbacks": {}
    },
    "faq_question_and_arrow_wrapper_right_first": {
      "callbacks": {}
    },
    "faq_icon_wrapper_right_first": {
      "callbacks": {}
    },
    "faq_question_wrapper_right_first": {
      "callbacks": {}
    },
    "footer_section": {
      "callbacks": {}
    },
    "footer_wrapper": {
      "callbacks": {}
    },
    "footer_heading_wrapper": {
      "callbacks": {}
    },
    "footer_cta": {
      "callbacks": {}
    },
    "footer_address_and_link_wrapper": {
      "callbacks": {}
    },
    "footer_address_wrapper": {
      "callbacks": {}
    },
    "footer_logo_wrap": {
      "callbacks": {}
    },
    "contact_email_footer": {
      "callbacks": {}
    },
    "email_image_footer_wrapper": {
      "callbacks": {}
    },
    "footer_links": {
      "callbacks": {}
    },
    "footer_about": {
      "callbacks": {}
    },
    "footer_services": {
      "callbacks": {}
    },
    "experience_footer": {
      "callbacks": {}
    },
    "sub_footer_wrapper": {
      "callbacks": {}
    },
    "sub_footer_text": {
      "callbacks": {}
    },
    "Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078ab3cfa1bca879adb93d1_Group%2070.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blog": {
      "custom": {
        "text": "Blog",
        "url": "/"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "about": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "services": {
      "custom": {
        "text": "Services",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projects": {
      "custom": {
        "text": "Projects",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "none": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1": {
      "custom": {
        "text": "I design products that delight and inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "paragraph": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div10": {
      "callbacks": {}
    },
    "Div11": {
      "callbacks": {}
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff019fc559a4200eda62273_Vector.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "home_hero_link_text": {
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60ad1c2b0e1d633fc7ef2e69_Group%20160-min-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "trusted_by_text_block": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "image_one": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0cd748b8581836fddf5_Group%20334.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "image_four": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "image_third": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "services_heading": {
      "custom": {
        "text": "SERVICES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "main_heading": {
      "custom": {
        "text": "Design that solves problems, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "image_contain": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584362e74acfa6b75398_Group%2051.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "heading": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "text": {
      "custom": {
        "text": "Design strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "secondtext": {
      "custom": {
        "text": "Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "thirdtext": {
      "custom": {
        "text": "Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "itemText3": {
      "custom": {
        "text": "Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "itemText2": {
      "custom": {
        "text": "Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "real_second_service_pointer_one": {
      "custom": {
        "text": "Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "real_second_service_wrapper_paragraph": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "second_service_heading": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "second_real_image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843b6409375f7c23f2b_Group%2017.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "third_service_pointer_three": {
      "custom": {
        "text": "Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "third_service_pointer_two": {
      "custom": {
        "text": "Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "real_third_service_pointer_one": {
      "custom": {
        "text": " Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "third_paragraph": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "third_heading": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "third_service_icon": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435ceaed068dde60ca_Group%2016.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "case_studies_project_button": {
      "custom": {
        "text": "View all Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "case_studies_subText_first": {
      "custom": {
        "text": "P R O J E C T S"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "I bring results.  My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_image_first.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "project_slide_tag_text": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "project_slide_text_block": {
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff019fc559a4200eda62273_Vector.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "second_project_slide_text_block": {
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff019fc559a4200eda62273_Vector.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": "Datadash Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "second_project_slide_tag_text": {
      "custom": {
        "text": "PRODUCT DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_second_image.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/left%20arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right%20arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image35": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div64": {
      "callbacks": {}
    },
    "Div62": {
      "callbacks": {}
    },
    "TextBox30": {
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff019fc559a4200eda62273_Vector.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "second_image_contain": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843b6409375f7c23f2b_Group%2017.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox101": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blog_item_view_all": {
      "custom": {
        "text": "View all"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "white_arrow": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "B L O G S"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "PRODUCT  DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lightbox_second.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lightbox_first.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lightbox_third.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lightbox_fourth.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "📚  Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experience_gray_bottom_border": {
      "callbacks": {}
    },
    "TextBox59": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "MSc (Human Computer Interaction)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/experience_arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experience_gary_bottom_border_second": {
      "callbacks": {}
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/experience_arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "• 2013-2014"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "UX Training Bootcamp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "MIT Summer School"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experience_gray_bottom_border_third": {
      "callbacks": {}
    },
    "Image31": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/experience_arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": "• 2009-2012"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "custom": {
        "text": "BSc in Software Engineering"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "California State University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experience_right_gary_bottom_third_border": {
      "callbacks": {}
    },
    "TextBox69": {
      "custom": {
        "text": "Kingdom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "custom": {
        "text": "UI Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image32": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/experience_arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experience_right_gray_bottom_second_wrapper": {
      "callbacks": {}
    },
    "TextBox72": {
      "custom": {
        "text": "MusicMash"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "custom": {
        "text": "Information Architect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/experience_arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experience_right_gray_bottom_border_first": {
      "callbacks": {}
    },
    "Image34": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/experience_arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "custom": {
        "text": "• April 2019 - Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "custom": {
        "text": "Senior Product Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "custom": {
        "text": "T E S T I M O N I A L S"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "custom": {
        "text": "Word on the street"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/604788d804dfe4ec1de7bb97_image-1-compressed-p-500.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/quote.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "custom": {
        "text": "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "custom": {
        "text": "John Frankin"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "custom": {
        "text": "Founder, Double Bunch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white_left_arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image39": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white_right_arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "custom": {
        "text": "F A Q"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "custom": {
        "text": "Frequently asked questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image40": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20single%20down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image41": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20single%20down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "custom": {
        "text": "What is your hourly rate?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image42": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20single%20down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "custom": {
        "text": "What time-zone do you work in?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20single%20down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "custom": {
        "text": "What is the typical timeline for a project?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "custom": {
        "text": "What if I need help after the project is complete?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20single%20down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "custom": {
        "text": "What metrics do you use to measure success?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20single%20down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "custom": {
        "text": "What does your design process look like?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20single%20down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20single%20down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "custom": {
        "text": "How do you charge for projects ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_heading": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image48": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/white%20logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox97": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image49": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/email.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox98": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "custom": {
        "text": "Dribbble"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experience_footer_text": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "custom": {
        "text": "© All rights reserved. Conversionflow. Powered by Webflow / Image License Info / Instructions / Changelog /Style Guide "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
