import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true,
  title: 'Memento Database Wiki',
  description: 'Documentation for Memento Database',
  base: '/',

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Memento Database Wiki',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'How To', link: '/how/How_Add_a_Library' },
      { text: 'Fields', link: '/fields/Text_field' },
      { text: 'Scripting', link: '/scripting/Scripting' },
      { text: 'FAQ', link: '/FAQ' },
      { text: 'About', link: '/about' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Terminology', link: '/Terminology' },
          { text: 'Glossary', link: '/Glossary' },
          { text: 'FAQ', link: '/FAQ' },
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Library', link: '/Library' },
          { text: 'Entry', link: '/Entry' },
          { text: 'Field', link: '/Field' },
          { text: 'Field Type', link: '/Field_Type' },
          { text: 'Field Role', link: '/Field_Role' },
          { text: 'Aggregation', link: '/Aggregation' },
        ]
      },
      {
        text: 'Fields',
        collapsed: false,
        items: [
          { text: 'Text', link: '/fields/Text_field' },
          { text: 'Rich Text', link: '/fields/Rich_Text_field' },
          { text: 'Integer', link: '/fields/Integer_field' },
          { text: 'Integer Values', link: '/fields/Integer_values_field' },
          { text: 'Real Number', link: '/fields/Real_number_field' },
          { text: 'Currency', link: '/fields/Currency_field' },
          { text: 'Calculation', link: '/fields/Calculation_field' },
          { text: 'Boolean', link: '/fields/Boolean_field' },
          { text: 'Date', link: '/fields/Date_field' },
          { text: 'Time', link: '/fields/Time_field' },
          { text: 'DateTime', link: '/fields/DateTime_field' },
          { text: 'Single-choice List', link: '/fields/Single-choice_List_field' },
          { text: 'Multiple-choice List', link: '/fields/Multiple-choice_List_field' },
          { text: 'Radio Buttons', link: '/fields/Radio_Buttons_field' },
          { text: 'Checkboxes', link: '/fields/Checkboxes_field' },
          { text: 'List', link: '/fields/List_field' },
          { text: 'Tags', link: '/fields/Tags_field' },
          { text: 'Image', link: '/fields/Image_field' },
          { text: 'Audio', link: '/fields/Audio_field' },
          { text: 'Location', link: '/fields/Location_field' },
          { text: 'Contact', link: '/fields/Contact_field' },
          { text: 'Hyperlink', link: '/fields/Hyperlink_field' },
          { text: 'Email Address', link: '/fields/Email_Address_field' },
          { text: 'Phone Number', link: '/fields/Phone_Number_field' },
          { text: 'Link To Entry', link: '/fields/Link_To_Entry_field' },
          { text: 'Link To File', link: '/fields/Link_To_File_field' },
          { text: 'JavaScript', link: '/fields/JavaScript_field' },
          { text: 'Barcode', link: '/fields/Barcode_field' },
          { text: 'Rating', link: '/fields/Rating_field' },
          { text: 'Signature', link: '/fields/Signature_field' },
          { text: 'Password', link: '/fields/Password_field' },
        ]
      },
      {
        text: 'User Interface',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/ui/User_Interface' },
          { text: 'Screens & Cards', link: '/ui/Screens_&_cards' },
          { text: 'Windows & Panes', link: '/ui/Windows_&_panes' },
          { text: 'Libraries List Screen', link: '/ui/Libraries_List_screen' },
          { text: 'Libraries List Pane', link: '/ui/Libraries_List_pane' },
          { text: 'Library Edit Screen', link: '/ui/Library_Edit_screen' },
          { text: 'Library Entries List', link: '/ui/Library_Entries_List_screen' },
          { text: 'Library Settings', link: '/ui/Library_Settings_screen' },
          { text: 'Entry View Card', link: '/ui/Entry_View_card' },
          { text: 'Entry Edit Card', link: '/ui/Entry_Edit_card' },
          { text: 'Field Edit Card', link: '/ui/Field_Edit_card' },
          { text: 'File Manager Card', link: '/ui/File_Manager_card' },
          { text: 'Attached Files Card', link: '/ui/Attached_Files_card' },
          { text: 'Cloud Library Status', link: '/ui/Cloud_Library_Status_card' },
          { text: 'Main Window Menu Bar', link: '/ui/Main_Window_menu_bar' },
          { text: 'Library Window Menu Bar', link: '/ui/Library_Window_menu_bar' },
        ]
      },
      {
        text: 'Scripting',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/scripting/Scripting' },
          { text: 'Triggers', link: '/scripting/Triggers' },
          { text: 'Trigger Examples', link: '/scripting/Trigger_Examples' },
          { text: 'Actions', link: '/scripting/Actions' },
          { text: 'Data Sources', link: '/scripting/Data_Sources' },
          { text: 'Script Widgets', link: '/scripting/Script_Widgets' },
          { text: 'JavaScript Library', link: '/scripting/Memento_JavaScript_Library' },
          { text: 'JavaScript UI', link: '/scripting/Memento_JavaScript_UI' },
          { text: 'Attributes of Linked Entries', link: '/scripting/Attributes_of_linked_entries' },
        ]
      },
      {
        text: 'How To',
        collapsed: true,
        items: [
          { text: 'Add a Library', link: '/how/How_Add_a_Library' },
          { text: 'Field Dependencies', link: '/how/How_Field_Dependencies' },
          { text: 'Analyze Data', link: '/how/How_Analyze_your_data' },
          { text: 'Trigger Examples', link: '/how/How_Trigger_Examples' },
          { text: 'Write JavaScript Scripts', link: '/how/How_Write_scripts_in_JavaScript_for_Memento' },
        ]
      },
      {
        text: 'Tutorials',
        collapsed: true,
        items: [
          { text: 'All Tutorials', link: '/tutorials/Memento_tutorials' },
          { text: 'Simple To Do List', link: '/tutorials/Tutorial_Simple_To_Do_List' },
          { text: 'Simple To Do List Enhancements', link: '/tutorials/Tutorial_Simple_To_Do_List_Enhancements' },
        ]
      },
      {
        text: 'Data Management',
        collapsed: true,
        items: [
          { text: 'Importing & Exporting', link: '/Importing_and_exporting_data' },
          { text: 'Synchronizing Data', link: '/Synchronizing_data' },
          { text: 'Cloud Storage & Teamwork', link: '/Cloud_storage_and_Teamwork' },
          { text: 'Structuring your Database', link: '/Structuring_your_Memento_Database' },
          { text: 'Data Analysis', link: '/Data_analysis' },
          { text: 'Charting Data', link: '/Charting_data' },
        ]
      },
      {
        text: 'More',
        collapsed: true,
        items: [
          { text: 'Memento Settings', link: '/Memento_Settings' },
          { text: 'About this Wiki', link: '/about' },
        ]
      },
    ],

    search: {
      provider: 'local'
    },


    footer: {

      copyright: 'Copyright © MementoDB Inc.'
    }
  }
})
