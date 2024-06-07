const elelist1 = [
  "H",
  "He",
  "Li",
  "Be",
  "B",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Na",
  "Mg",
  "Al",
  "Si",
  "P",
  "S",
  "Cl",
  "Ar",
  "K",
  "Ca",
  "Sc",
  "Ti",
  "V",
  "Cr",
  "Mn",
  "Fe",
  "Co",
  "Ni",
  "Cu",
  "Zn",
  "Ga",
  "Ge",
  "As",
  "Se",
  "Br",
  "Kr",
  "Rb",
  "Sr",
  "Y",
  "Zr",
  "Nb",
  "Mo",
  "Tc",
  "Ru",
  "Rh",
  "Pd",
  "Ag",
  "Cd",
  "In",
  "Sn",
  "Sb",
  "Te",
  "I",
  "Xe",
  "Cs",
  "Ba",
  "La",
  "Ce",
  "Pr",
  "Nd",
  "Pm",
  "Sm",
  "Eu",
  "Gd",
  "Tb",
  "Dy",
  "Ho",
  "Er",
  "Tm",
  "Yb",
  "Lu",
  "Hf",
  "Ta",
  "W",
  "Re",
  "Os",
  "Ir",
  "Pt",
  "Au",
  "Hg",
  "Tl",
  "Pb",
  "Bi",
  "Po",
  "At",
  "Rn",
  "Fr",
  "Ra",
  "Ac",
  "Th",
  "Pa",
  "U",
  "Np",
  "Pu",
  "Am",
  "Cm",
  "Bk",
  "Cf",
  "Es",
  "Fm",
  "Md",
  "No",
  "Lr",
  "Rf",
  "Db",
  "Sg",
  "Bh",
  "Hs",
  "Mt",
  "Ds",
  "Rg",
  "Cn",
  "Nh",
  "Fl",
  "Mc",
  "Lv",
  "Ts",
  "Og"
];
const nav_bar = [
  "brand",
  "home",
  "details",
  "history",
  "contact",
  "mode",
  "lang",
];
const elelist2 = [
  "lantan",
  "actini",
  "lantan1",
  "actini1",
  "radio",
  "nonmetal",
  "alkalimetal",
  "alkalineearthmetal",
  "metalloid",
  "halogen",
  "noble",
  "post",
  "transition",
  "undef",
];
const application = [ 
  "appli_H_1",
  "appli_H_2", 
  "appli_H_3",
  "appli_He_1",
  "appli_He_2",
  "appli_He_3",
  "appli_Li_1",
  "appli_Li_2",
  "appli_Li_3",
  "appli_Be_1",
  "appli_Be_2",
  "appli_Be_3",
  "appli_B_1",
  "appli_B_2",
  "appli_B_3",
  "appli_C_1",
  "appli_C_2",
  "appli_C_3",
  "appli_N_1",
  "appli_N_2",
  "appli_N_3",
  "appli_O_1",
  "appli_O_2",
  "appli_O_3",
  "appli_F_1",
  "appli_F_2",
  "appli_F_3",
  "appli_Ne_1",
  "appli_Ne_2",
  "appli_Ne_3",
  "appli_Na_1",
  "appli_Na_2",
  "appli_Na_3",
  "appli_Mg_1",
  "appli_Mg_2",
  "appli_Mg_3",
  "appli_Al_1",
  "appli_Al_2",
  "appli_Al_3",
  "appli_Si_1",
  "appli_Si_2",
  "appli_Si_3",
  "appli_P_1",
  "appli_P_2",
  "appli_P_3",
  "appli_S_1",
  "appli_S_2",
  "appli_S_3",
  "appli_Cl_1",
  "appli_Cl_2",
  "appli_Cl_3",
  "appli_Ar_1",
  "appli_Ar_2",
  "appli_Ar_3",
  "appli_K_1",
  "appli_K_2",
  "appli_K_3",
  "appli_Ca_1",
  "appli_Ca_2",
  "appli_Ca_3",
  "appli_Sc_1",
  "appli_Sc_2",
  "appli_Sc_3",
  "appli_Ti_1",
  "appli_Ti_2",
  "appli_Ti_3",
  "appli_V_1",
  "appli_V_2",
  "appli_V_3",
  "appli_Cr_1",
  "appli_Cr_2",
  "appli_Cr_3",
  "appli_Mn_1",
  "appli_Mn_2",
  "appli_Mn_3",
  "appli_Fe_1",
  "appli_Fe_2",
  "appli_Fe_3",
  "appli_Co_1",
  "appli_Co_2",
  "appli_Co_3",
  "appli_Ni_1",
  "appli_Ni_2",
  "appli_Ni_3",
  "appli_Cu_1",
  "appli_Cu_2",
  "appli_Cu_3",
  "appli_Zn_1",
  "appli_Zn_2",
  "appli_Zn_3",
  "appli_Ga_1",
  "appli_Ga_2",
  "appli_Ga_3",
  "appli_Ge_1",
  "appli_Ge_2",
  "appli_Ge_3",
  "appli_As_1",
  "appli_As_2",
  "appli_As_3",
  "appli_Se_1",
  "appli_Se_2",
  "appli_Se_3",
  "appli_Br_1",
  "appli_Br_2",
  "appli_Br_3",
  "appli_Kr_1",
  "appli_Kr_2",
  "appli_Kr_3",
  "appli_Rb_1",
  "appli_Rb_2",
  "appli_Rb_3",
  "appli_Sr_1",
  "appli_Sr_2",
  "appli_Sr_3",
  "appli_Y_1",
  "appli_Y_2",
  "appli_Y_3",
  "appli_Zr_1",
  "appli_Zr_2",
  "appli_Zr_3",
  "appli_Nb_1",
  "appli_Nb_2",
  "appli_Nb_3",
  "appli_Mo_1",
  "appli_Mo_2",
  "appli_Mo_3",
  "appli_Tc_1",
  "appli_Tc_2",
  "appli_Tc_3",
  "appli_Ru_1",
  "appli_Ru_2",
  "appli_Ru_3",
  "appli_Rh_1",
  "appli_Rh_2",
  "appli_Rh_3",
  "appli_Pd_1",
  "appli_Pd_2",
  "appli_Pd_3",
  "appli_Ag_1",
  "appli_Ag_2",
  "appli_Ag_3",
  "appli_Cd_1",
  "appli_Cd_2",
  "appli_Cd_3",
  "appli_In_1",
  "appli_In_2",
  "appli_In_3",
  "appli_Sn_1",
  "appli_Sn_2",
  "appli_Sn_3",
  "appli_Sb_1",
  "appli_Sb_2",
  "appli_Sb_3",
  "appli_Te_1",
  "appli_Te_2",
  "appli_Te_3",
  "appli_I_1",
  "appli_I_2",
  "appli_I_3",
  "appli_Xe_1",
  "appli_Xe_2",
  "appli_Xe_3",
  "appli_Cs_1",
  "appli_Cs_2",
  "appli_Cs_3",
  "appli_Ba_1",
  "appli_Ba_2",
  "appli_Ba_3",
  "appli_La_1",
  "appli_La_2",
  "appli_La_3",
  "appli_Ce_1",
  "appli_Ce_2",
  "appli_Ce_3",
  "appli_Pr_1",
  "appli_Pr_2",
  "appli_Pr_3",
  "appli_Nd_1",
  "appli_Nd_2",
  "appli_Nd_3",
  "appli_Pm_1",
  "appli_Pm_2",
  "appli_Pm_3",
  "appli_Sm_1",
  "appli_Sm_2",
  "appli_Sm_3",
  "appli_Eu_1",
  "appli_Eu_2",
  "appli_Eu_3",
  "appli_Gd_1",
  "appli_Gd_2",
  "appli_Gd_3",
  "appli_Tb_1",
  "appli_Tb_2",
  "appli_Tb_3",
  "appli_Dy_1",
  "appli_Dy_2",
  "appli_Dy_3",
  "appli_Ho_1",
  "appli_Ho_2",
  "appli_Ho_3",
  "appli_Er_1",
  "appli_Er_2",
  "appli_Er_3",
  "appli_Tm_1",
  "appli_Tm_2",
  "appli_Tm_3",
  "appli_Yb_1",
  "appli_Yb_2",
  "appli_Yb_3",
  "appli_Lu_1",
  "appli_Lu_2",
  "appli_Lu_3",
  "appli_Hf_1",
  "appli_Hf_2",
  "appli_Hf_3",
  "appli_Ta_1",
  "appli_Ta_2",
  "appli_Ta_3",
  "appli_W_1",
  "appli_W_2",
  "appli_W_3",
  "appli_Re_1",
  "appli_Re_2",
  "appli_Re_3",
  "appli_Os_1",
  "appli_Os_2",
  "appli_Os_3",
  "appli_Ir_1",
  "appli_Ir_2",
  "appli_Ir_3",
  "appli_Pt_1",
  "appli_Pt_2",
  "appli_Pt_3",
  "appli_Au_1",
  "appli_Au_2",
  "appli_Au_3",
  "appli_Hg_1",
  "appli_Hg_2",
  "appli_Hg_3",
  "appli_Tl_1",
  "appli_Tl_2",
  "appli_Tl_3",
  "appli_Pb_1",
  "appli_Pb_2",
  "appli_Pb_3",
  "appli_Bi_1",
  "appli_Bi_2",
  "appli_Bi_3",
  "appli_Po_1",
  "appli_Po_2",
  "appli_Po_3",
  "appli_At_1",
  "appli_At_2",
  "appli_At_3",
  "appli_Rn_1",
  "appli_Rn_2",
  "appli_Rn_3",
  "appli_Fr_1",
  "appli_Fr_2",
  "appli_Fr_3",
  "appli_Ra_1",
  "appli_Ra_2",
  "appli_Ra_3",
  "appli_Ac_1",
  "appli_Ac_2",
  "appli_Ac_3",
  "appli_Th_1",
  "appli_Th_2",
  "appli_Th_3",
  "appli_Pa_1",
  "appli_Pa_2",
  "appli_Pa_3",
  "appli_U_1",
  "appli_U_2",
  "appli_U_3",
  "appli_Np_1",
  "appli_Np_2",
  "appli_Np_3",
  "appli_Pu_1",
  "appli_Pu_2",
  "appli_Pu_3",
  "appli_Am_1",
  "appli_Am_2",
  "appli_Am_3",
  "appli_Cm_1",
  "appli_Cm_2",
  "appli_Cm_3",
  "appli_Bk_1",
  "appli_Bk_2",
  "appli_Bk_3",
  "appli_Cf_1",
  "appli_Cf_2",
  "appli_Cf_3",
  "appli_Es_1",
  "appli_Es_2",
  "appli_Es_3",
  "appli_Fm_1",
  "appli_Fm_2",
  "appli_Fm_3",
  "appli_Md_1",
  "appli_Md_2",
  "appli_Md_3",
  "appli_No_1",
  "appli_No_2",
  "appli_No_3",
  "appli_Lr_1",
  "appli_Lr_2",
  "appli_Lr_3",
  "appli_Rf_1",
  "appli_Rf_2",
  "appli_Rf_3",
  "appli_Db_1",
  "appli_Db_2",
  "appli_Db_3",
  "appli_Sg_1",
  "appli_Sg_2",
  "appli_Sg_3",
  "appli_Bh_1",
  "appli_Bh_2",
  "appli_Bh_3",
  "appli_Hs_1",
  "appli_Hs_2",
  "appli_Hs_3",
  "appli_Mt_1",
  "appli_Mt_2",
  "appli_Mt_3",
  "appli_Ds_1",
  "appli_Ds_2",
  "appli_Ds_3",
  "appli_Rg_1",
  "appli_Rg_2",
  "appli_Rg_3",
  "appli_Cn_1",
  "appli_Cn_2",
  "appli_Cn_3",
  "appli_Nh_1",
  "appli_Nh_2",
  "appli_Nh_3",
  "appli_Fl_1",
  "appli_Fl_2",
  "appli_Fl_3",
  "appli_Mc_1",
  "appli_Mc_2",
  "appli_Mc_3",
  "appli_Lv_1",
  "appli_Lv_2",
  "appli_Lv_3",
  "appli_Ts_1",
  "appli_Ts_2",
  "appli_Ts_3",
  "appli_Og_1",
  "appli_Og_2",
  "appli_Og_3",
];
const footer = ["intro", "school", "face", "mail", "rick"];
const events = [
  "title4",
  "e1_title",
  "e1_content",
  "e1_authen",
  "e2_title",
  "e2_content",
  "e2_authen",
  "e3_title",
  "e3_content",
  "e3_authen",
  "e4_title",
  "e4_content",
  "e4_authen",
  "e5_title",
  "e5_content",
  "e5_authen",
  "e6_title",
  "e6_content",
  "e6_authen",
  "e7_title",
  "e7_content",
  "e7_authen",
  "e8_title",
  "e8_content",
  "e8_authen",
  "e9_title",
  "e9_content",
  "e9_authen"
];
const contact = ["title2", "introduction", "role-web1", "role-web2", "lead", "des", "edit"];
const sidebar = ["content", "props", "props2", "structure", "reaction", "history1", "appli", "structure2", "history2", "appli2"];
const element = ["period","group", "appli3", "history3", "structure3", "prop", "density", "oxidationState", "valenceNumber", "protonNumber", "neutronNumber", "electronNumber", "electronConfig", "year", "discoverer","atomicNumber","atomicMass", "boilingPoint", "meltingPoint", "valenceNumber", "stateAtRoomTemperature", "read"];


const navbarTranslation = {
  en: {
    //nav bar
    brand: "Periodic table",
    home: "Home",
    details: "Element details",
    history: "History",
    contact: "About us",
    mode: "Switch mode",
    lang: "Switch language",
  },
  vn: {
    brand: "Bảng tuần hoàn hóa học",
    home: "Trang chủ",
    details: "Thông tin nguyên tố",
    history: "Lịch sử",
    contact: "Về chúng tôi",
    mode: "Đổi giao diện",
    lang: "Đổi ngôn ngữ",
  },
};
const footerTranslation = {
  en: {
    intro: "This is our school project: Vinschool",
    face: "Our team's leader's facebook",
    mail: "Our team's leader's gmail",
    rick: "Thank you for using our website!",
  },
  vn: {
    intro: "Đây là dự án của trường Vinschool",
    face: "Facebook của nhóm trưởng",
    mail: "Email của nhóm trưởng",
    rick: "Cảm ơn đã sử dụng trang web của chúng tôi",
  },
};
const historyTranslation = {
  en: {
    title4: "History of the periodic table",
    //e1
    e1_title: "John Dalton published the first model of the atom",
    e1_content:
      "Dalton introduced “the billiard ball” atomic model. Since the ideas of atomic nuclear or electrons were not yet recognized an atom was considered to have a ball-shaped structure.",
    //e2
    e2_title:
      "Johann Dobereiner early attempted to sort elements into logical sets",
    e2_content:
      "Dobereiner discovered groups of 3 elements known as “Dobereiner triads”. These triads exhibited related physical properties like atomic weight, density,… He noted that these properties of the middle element could be predicted by averaging the values of the other 2 elements.",
    //e3
    e3_title:
      "John Newlands initiated the detection of periodic patterns in the elements’ properties",
    e3_content:
      "The “law of octaves” was proposed by Newlands. He observed that when arranging elements by increasing atomic weight, elements with similar properties occurred after each interval of seven elements (Ex: solubility, chemical reactivity, acidity, basicity)",
    //e4
    e4_title: "Julius Meyer published an incompleted periodic table",
    e4_content:
      "Meyer’s first table was arranged by increasing atomic mass, including many gaps of undiscovered elements. He also predicted the atomic masses of these missing elements based on known ones.",

    //e5
    e5_title:
      "Dmitri Mendeleev & Julius Meyer came up with early versions of the periodic table        ",
    e5_content:
      "Mendeleev and Meyer both listed the latest elements, but their tables were arranged differently. Mendeleev’s table arrangement is based on the relationship between atomic weight and valence. Meanwhile, Meyer’s table was arranged by the relation between atomic weight and volume.",

    //e6
    e6_title: " Henry Moseley developed the first modern periodic table",
    e6_content:
      "Moseley improved the periodic table by arranging elements based on their number of protons, which became the first modern table. Nowadays, it’s commonly used in chemistry, materials science, technology, and medicine.",

    //e7
    e7_title: "The atomic theory",
    e7_content:
      "Scientists discovered electrons and developed the atomic theory. The periodic table has been officially approved by scientists. It explains why similar elements were grouped together.",

    //e8
    e8_title: "The application of the periodic table",
    e8_content:
      "Scientists used the periodic table to predict new element’s properties. They also found out how to use rare elements to manufacture materials and special gadgets.        ",

    //e9
    e9_title: "The development",
    e9_content:
      "The periodic table continued to be used to predict elements’ properties and develop new materials. Nonetheless, it has been expanded to include newer elements.",

  },
  vn: {
    title4: "Lịch sử của bảng tuần hoàn hóa học",
    //e1
    e1_title: "John Dalton đề xuất mô hình nguyên tử đầu tiên        ",
    e1_content:
      "Dalton đã giới thiệu mô hình nguyên tử “quả bóng bi-a”. Vì khái niệm về hạt nhân nguyên tử hay electron vẫn chưa được công nhận, các nguyên tử được xem là có cấu trúc hình quả bóng.",

    //e2
    e2_title:
      "Johann Dobereiner thành công sắp xếp các nguyên tố thành tập hợp có logic",
    e2_content:
      "Dobereiner phát hiện ra các nhóm gồm 3 nguyên tố hoá học được gọi là “Bộ ba Dobereiner”. Các bộ ba này được sắp xếp theo tính chất vật lý liên quan đến nhau như khối lượng nguyên tử, khối lượng riêng,… Ông chỉ ra rằng những tính chất của nguyên tố ở giữa có thể được tính toán bằng cách tính trung bình cộng của giá trị đó ở 2 nguyên tố còn lại.        ",

    //e3
    e3_title:
      " John Newlands dẫn đầu việc tìm ra sự tuần hoàn trong tính chất của các nguyên tố        ",
    e3_content:
      "“Định luật quãng tám” được đề xuất bởi Newlands. Ông thấy rằng khi sắp xếp các nguyên tố theo khối lượng nguyên tử tăng dần, các nguyên tử có thuộc tính tương đồng sẽ xuất hiện sau mỗi 7 nguyên tử trong dãy (Vd: tính hoà tan, mức độ phản ứng hoá học, tính axit, tính bazơ)",

    //e4
    e4_title:
      "Julius Meyer đã công bố một bảng tuần hoàn hoá học chưa hoàn chỉnh        ",
    e4_content:
      "Bảng đầu tiên của Meyer được sắp xếp theo sự gia tăng khối lượng nguyên tử, gồm nhiều khoảng trống của các nguyên tố chưa được khám phá. Ông còn dự đoán khối lượng nguyên tử các nguyên tố còn thiếu này dựa trên các nguyên tố đã biết.        ",

    //e5
    e5_title:
      " Dmitri Mendeleev & Julius Meyer đưa ra các phiên bản sơ khai của bảng tuần hoàn        ",
    e5_content:
      "Cả Mendeleev và Meyer đều liệt kê những nguyên tố mới nhất, nhưng bảng tuần hoàn của họ được sắp xếp một cách khác nhau. Bảng của Mendeleev được sắp xếp theo mối tương quan giữa khối lượng nguyên tử và hoá trị. Còn của Meyer được sắp xếp theo sự liên kết giữa khối lượng và thể tích nguyên tử.        ",

    //e6
    e6_title: "Henry Moseley phát triển bảng tuần hoàn hiện đại đầu tiên",
    e6_content:
      "Moseley đã cải tiến bảng tuần hoàn dựa trên số hiệu nguyên tử của các nguyên tố, và bảng này đã trở thành bảng tuần hoàn hiện đại đầu tiên. Hiện nay, nó được sử dụng rộng rãi trong lĩnh vực hóa học, khoa học vật liệu, công nghệ và y học.        ",

    //e7
    e7_title: "Lý thuyết cấu trúc nguyên tử",
    e7_content:
      "Các nhà khoa học đã khám phá ra electron, phát triển lý thuyết cấu trúc nguyên tử. Bảng tuần hoàn hoá học đã được chính thức chấp nhận trong cộng đồng khoa học, giải thích tại sao các nguyên tố có tính chất tương tự lại được sắp xếp trong các nhóm.        ",
    //e8
    e8_title: "Áp dụng bảng tuần hoàn vào thực tế",
    e8_content:
      "Các nhà khoa học đã sử dụng bảng tuần hoàn để dự đoán tính chất của các nguyên tố mới, tìm ra cách sử dụng các nguyên tố hiếm để sản xuất vật liệu và thiết bị đặc biệt.        ",
    //e9
    e9_title: "Sự phát triển",
    e9_content:
      "Bảng tuần hoàn hoá học tiếp tục được sử dụng để dự đoán tính chất của các nguyên tố và phát triển vật liệu mới. Ngoài ra, bảng cũng được mở rộng để bao gồm các nguyên tố mới được khám phá.        ",
  },
};
const contactTranslation = {
  "en": {
    "title2": "About us",
    "introduction": "We are a team of 8th-grade students from Vinschool and making a periodic table for Science project.",
    "role-web1": "Web developer",
    "role-web2": "Web developer",
    "lead": "Leader",
    "des": "Designer",
    "edit": "Video editor"
  },
  "vn": {
    "title2": "Chúng tôi là ai?",
    "introduction": "Chúng tôi là nhóm học sinh lớp 8 trường Vinschool đang xây dựng bảng tuần hoàn cho dự án Khoa học.",
    "role-web1": "Lập trình viên",
    "role-web2": "Lập trình viên",
    "lead": "Trưởng nhóm",
    "des": "Người thiết kế",
    "edit": "Người chỉnh sửa video"
  }
};
const sidebarTranslation = {
  "en": {
    "content": "Content",
    "props": "Properties",
    "props2": "Properties",
    "structure": "Structure",
    "structure2": "Structure",
    "reaction": "Signature chemical reaction",
    "reaction2": "Signature chemical reaction",
    "history1": "History",
    "history2": "History",
    "appli": "Applications",
    "appli2": "Applications",
    "fact": "Fun facts",
    "fact2": "Fun facts"
  },
  "vn": {
    "content": "Nội dung",
    "props": "Tính chất",
    "props2": "Tính chất",
    "structure": "Cấu tạo nguyên tử",
    "structure2": "Cấu tạo nguyên tử",
    "reaction": "Các phản ứng đặc trưng",
    "reaction2": "Các phản ứng đặc trưng",
    "history1": "Lịch sử",
    "history2": "Lịch sử",
    "appli": "Ứng dụng",
    "appli2": "Ứng dụng",
    "fact": "Sự thật thú vị",
    "fact2": "Sự thật thú vị"
  }
};
const appliTranslation = {
  "en": {
  appli_H_1: "Pumped into balloons because it is the lightest gas",
  appli_H_2: "Used as fuel for engines, replacing gasoline",
  appli_H_3: "Used in welding torches for cutting metal",
  
  appli_He_1: "Often pumped into balloons",
  appli_He_2: "Used in ventilators for patients with respiratory issues",
  appli_He_3: "Makes up 80% of artificial breathing gas for divers",
  
  appli_Li_1: "Used to make lithium batteries with higher energy than regular batteries",
  appli_Li_2: "Used to enhance the effectiveness of antidepressants",
  appli_Li_3: "Helps with the molding process of glass",
  
  appli_Be_1: "Used in electronic circuit boards",
  appli_Be_2: "Used to make water pipes and fire nozzles",
  appli_Be_3: "Used in car interiors",
  
  appli_B_1: "Added to osteoporosis and arthritis medications",
  appli_B_2: "Boric acid is used as an eye drop due to its anti-infection properties",
  appli_B_3: "Main component of boric fertilizers that help plants thrive",
  
  appli_C_1: "Diamonds: used as jewelry",
  appli_C_2: "Graphite: used as the core of black pencils",
  appli_C_3: "Carbon black: used in ink, black coloring agent",
  
  appli_N_1: "Liquid nitrogen helps preserve blood and biological samples",
  appli_N_2: "Used in food drying processes",
  appli_N_3: "Applied in laser cutting gases",
  
  appli_O_1: "Sustains life and combustion",
  appli_O_2: "Used in the chemical industry, making explosives",
  appli_O_3: "Supplied to pilots in cases of low air pressure",
  
  appli_F_1: "Added to toothpaste because it stimulates bone cells",
  appli_F_2: "Used as an insulating material",
  appli_F_3: "Used in the nuclear industry",
  
  appli_Ne_1: "Neon lights are used for advertising signs",
  appli_Ne_2: "Used in cathode ray tubes in TVs",
  appli_Ne_3: "Used in laser tubes",
  
  appli_K_1: "Main component of NPK fertilizer helping plant growth",
  appli_K_2: "Potassium chloride used to treat potassium deficiency in blood",
  appli_K_3: "Potassium sodium tartrate is a main ingredient in baking powder",
  
  appli_Ca_1: "Used as a dietary supplement to add calcium",
  appli_Ca_2: "Used in cement production",
  appli_Ca_3: "Acts as an antioxidant in alloys",
  
  appli_Al_1: "Household furnishings and kitchen utensils",
  appli_Al_2: "Used in the production of beverage cans and food wrap",
  appli_Al_3: "Used to build car frames",
  
  appli_Na_1: "Used to prevent and remove ice on streets",
  appli_Na_2: "Ingredient in shampoo, soap, toothpaste, etc.",
  appli_Na_3: "Found in table salt, baking soda, and baking powder",
  
  appli_Mg_1: "Used as a refractory material in production furnaces",
  appli_Mg_2: "Used in car and machinery manufacturing",
  appli_Mg_3: "Magnesium medications provide a laxative effect",
  
  appli_Si_1: "Used in manufacturing solar panels",
  appli_Si_2: "Creates silicon steel that resists acid",
  appli_Si_3: "Applied in construction like concrete, clay, sand, and cement",
  
  appli_P_1: "Phosphorus is an important component in fertilizers, especially phosphate fertilizers",
  appli_P_2: "Phosphorus is also found in fireworks",
  appli_P_3: "Phosphorus plays an important role in steel production",
  
  appli_S_1: "Supports the production of gunpowder, fireworks, matches, etc.",
  appli_S_2: "Used in DAP fertilizer providing nutrients for plants",
  appli_S_3: "Some cosmetics have sulfur that helps exfoliate the skin",
  
  appli_Cl_1: "Chlorine is widely used to disinfect drinking water and swimming pool water",
  appli_Cl_2: "Chlorine is an important raw material in the production of many industrial chemicals",
  appli_Cl_3: "Chlorine is a main component in many household bleach and disinfectant products",
  
  appli_Ar_1: "Argon laser surgery helps remove tumors and diseased tissue",
  appli_Ar_2: "Pumped into light bulbs to prevent oxidation of the filament",
  appli_Ar_3: "Applied in plasma metal cutting",
  
  appli_Sc_1: "Scandium is used in lighting, helping bulbs shine brighter",
  appli_Sc_2: "Aluminum-Scandium alloy appears in aircraft parts",
  appli_Sc_3: "High-end sports equipment also uses this material",
  
  appli_Ti_1: "Titanium is used in aircraft and spacecraft parts due to its high strength-to-weight ratio and heat resistance",
  appli_Ti_2: "Titanium is used to make dental implants",
  appli_Ti_3: "Titanium is used in the chemical and energy industries",
  
  appli_V_1: "Used to create blue and green colored glass",
  appli_V_2: "Manufactures Vanadium batteries using green energy",
  appli_V_3: "Increases the cold tolerance of steel",
  
  appli_Cr_1: "Plays an important role in making stainless steel",
  appli_Cr_2: "Used to coat other materials to make them harder",
  
  appli_Mn_1: "Used to produce steel and alloys",
  appli_Mn_2: "Used in rechargeable, alkaline, and zinc-carbon batteries",
  appli_Mn_3: "Manganese compounds are used as pigments in glass",
  
  appli_Fe_1: "Manufacture household goods, personal items, machinery, etc.",
  appli_Fe_2: "Used for mesh frames, scaffolding, road bridges in construction",
  appli_Fe_3: "Iron supplements help treat anemia",
  
  appli_Co_1: "Lithium cobalt oxide is used inside batteries",
  appli_Co_2: "Cobalt powder is also used to decorate porcelain products",
  appli_Co_3: "Cobalt is used to make Samarium Cobalt (SmCo) magnets",
  
  appli_Ni_1: "Nickel is an important component in producing stainless steel",
  appli_Ni_2: "Nickel is used in many types of batteries and electronic devices",
  appli_Ni_3: "Nickel is used to coat metal surfaces, creating corrosion-resistant coatings",
  
  appli_Cu_1: "Used to make electrical wires",
  appli_Cu_2: "Copper and its alloys are used in medical devices",
  appli_Cu_3: "Used to make jewelry",
  
  appli_Zn_1: "Zinc oxide is an ingredient in white paint",
  appli_Zn_2: "Used to coat metals, commonly steel and iron",
  appli_Zn_3: "Zinc rolls are used to make battery casings",
  
  appli_Ga_1: "Gallium is used in rocket engines",
  appli_Ga_2: "Gallium is used to diagnose diseases like lymphoma",
  appli_Ga_3: "Gallium arsenide is a compound capable of creating RF chips for mobile phones and satellite communication systems",
  
  appli_Ge_1: "Germanium is one of the first semiconductor materials used to produce transistors and diodes",
  appli_Ge_2: "Germanium is used as a substrate in producing multi-junction solar cells",
  
  appli_As_1: "Used as a pesticide",
  appli_As_2: "Used in medicine to kill cancer cells",
  appli_As_3: "Increases the clarity of glass and ceramic products",
  
  appli_Se_1: "Selenium medicine helps with antioxidants and cancer prevention",
  appli_Se_2: "Creates red color for glass enamel",
  appli_Se_3: "An ingredient in many anti-dandruff shampoos",
  
  appli_Br_1: "Bromine was used as a pesticide in the past",
  appli_Br_2: "Bromine is used in flame retardants",
  appli_Br_3: "Bromine is used to create disinfectants",
  
  appli_Kr_1: "Found in energy-saving fluorescent lamps",
  appli_Kr_2: "Used in incandescent bulbs",
  appli_Kr_3: "Used in flash lamps for high-speed photography",
  
  appli_Rb_1: "Used in atomic clocks",
  appli_Rb_2: "A popular choice for experiments involving laser cooling and atomic traps",
  appli_Rb_3: "Rubidium is used in positron emission tomography to study blood flow",
  
  appli_Sr_1: "Used to produce CRT TV screens",
  appli_Sr_2: "An ingredient in osteoporosis medications",
  appli_Sr_3: "Used in fireworks production",
  
  appli_Y_1: "Used in the laser industry",
  appli_Y_2: "Yttrium oxide is used in various ceramics",
  appli_Y_3: "Also used in the production of mobile phones and other technologies",
  
  appli_Zr_1: "Is a turbidity agent in ceramic and porcelain manufacturing",
  appli_Zr_2: "Primarily used in nuclear energy",
  appli_Zr_3: "Used in the production of medical surgical tools",
  
  appli_Nb_1: "Niobium is mainly used in the production of special alloys",
  appli_Nb_2: "Niobium is used in applications requiring superconductivity",
  appli_Nb_3: "Niobium is applied in the production of niobium capacitors",
  
  appli_Mo_1: "Acts as a lubricant on metal surfaces due to good heat resistance",
  appli_Mo_2: "Molybdenum fertilizer stimulates plant growth",
  appli_Mo_3: "Molybdenum medication helps prevent anemia",
  
  appli_Tc_1: "Is present in cancer diagnostic drugs",
  appli_Tc_2: "Is sparingly used due to high radioactivity",
  appli_Tc_3: "Used to 'strengthen' metals; the number of metals capable of undergoing this process is limited due to the radioactivity of this element",
  
  appli_Ru_1: "Is used in solar panel",
  appli_Ru_2: "Acts as a catalyst for many chemical reactions",
  appli_Ru_3: "Forms a corrosion-resistant coating for other metals",
  
  appli_Rh_1: "Catalyst helps reduce automobile exhaust emissions",
  appli_Rh_2: "Is plated on white gold to make jewelry",
  appli_Rh_3: "Produces high-quality ink pens",
  
  appli_Pd_1: "Acts as a catalyst for hydrogenation processes",
  appli_Pd_2: "Produces multilayer ceramic capacitors",
  appli_Pd_3: "Used as jewelry substitute for platinum or white gold",
  
  appli_Ag_1: "Manufactures electrical and electronic products",
  appli_Ag_2: "Produces silver jewelry such as necklaces, rings,…",
  appli_Ag_3: "Used to make various types of mirrors",
  
  appli_Cd_1: "Is used in battery production",
  appli_Cd_2: "Acts as a corrosion-resistant material for iron and steel",
  appli_Cd_3: "Used to manufacture some electronic components",
  
  appli_In_1: "Used in solar panel",
  appli_In_2: "Used as LCD screens in tablets, smartphones,…",
  appli_In_3: "Amplifies optical fibers to increase signal transmission",
  
  appli_Sn_1: "Is used to coat food containers, soft drinks,…",
  appli_Sn_2: "Manufactures decorative lights and household items",
  appli_Sn_3: "Is plated on metal surfaces to resist corrosion",
  
  appli_Sb_1: "Antimony trioxide helps slow down burning",
  appli_Sb_2: "Used as car battery",
  appli_Sb_3: "Is present in smoothing agents and glazes for ceramics",
  
  appli_Te_1: "Is used in solar panel production",
  appli_Te_2: "Is used to dye ceramics and glass",
  appli_Te_3: "Is used to increase metal's acid resistance and durability",
  
  appli_I_1: "Iodine ointment is used to disinfect wounds",
  appli_I_2: "Iodine-fortified food supplements enhance thyroid hormone production",
  appli_I_3: "Potassium iodine salt aids in treating nuclear radiation victims",
  
  appli_Xe_1: "Is used in specialized light sources",
  appli_Xe_2: "Is used to maintain satellites in their own orbit",
  appli_Xe_3: "Used in Magnetic Resonance Imaging (MRI) of internal organs",
  
  appli_Cs_1: "Applied in high-energy laser beams and fluorescent lamps",
  appli_Cs_2: "Used in highly accurate atomic clocks",
  appli_Cs_3: "Acts as a catalyst in some hydrogenation processes",
  
  appli_Ba_1: "Barium nitrate makes fireworks green",
  appli_Ba_2: "Barium carbonate is used in the ceramics industry to create special effects",
  appli_Ba_3: "Barium oxide (BaO) is used in the production of glass, quartz, and porcelain",
  
  appli_La_1: "Is used in movie projectors",
  appli_La_2: "Improves the impact resistance of metals",
  appli_La_3: "Is present in products that remove algae from swimming pools",
  
  appli_Ce_1: "Is a component in some antiemetic drugs",
  appli_Ce_2: "Used as a polishing agent for glass and ceramics",
  appli_Ce_3: "Glass and ceramics made from cerium oxide reduce ultraviolet ray absorption",
  
  appli_Pr_1: "Praseodymium imparts a yellow color to glass and ceramic glazes",
  appli_Pr_2: "Praseodymium is a core component of fluorescent lamps",
  appli_Pr_3: "Is used in aircraft engine",
  
  appli_Nd_1: "Magnets made from Neodymium are the strongest permanent magnets currently available",
  appli_Nd_2: "Used to manufacture high-speed electric trains",
  appli_Nd_3: "Neodymium magnets are used in automatic MRI imaging machines",
  
  appli_Pm_1: "Very little Promethium is used to make specialized atomic batteries",
  appli_Pm_2: "Used as an X-ray source and as a radioactive material in measuring devices",
  appli_Pm_3: "Promethium is commonly used for scientific research",
  
  appli_Sm_1: "Used as a raw material for manufacturing motors, equipment in the electronics industry",
  appli_Sm_2: "Used in lasers",
  appli_Sm_3: "Used to make magnets for headphones",
  
  appli_Eu_1: "Used in printing euro banknotes",
  appli_Eu_2: "Used as a laser material",
  appli_Eu_3: "Often used in geochemical research",
  
  appli_Gd_1: "Used to reinforce the high-temperature resistance of metals",
  appli_Gd_2: "Creates magnets, electronic components, and data storage disks",
  appli_Gd_3: "Used in the core of nuclear reactors",
  
  appli_Tb_1: "Used in low-energy light bulbs and sulfur lamps",
  appli_Tb_2: "Used to increase safety when using X-ray machines",
  appli_Tb_3: "Terbium salt is used in laser devices",
  appli_Dy_1: "Dysprosium iodide is used in halogen incandescent lamps",
  appli_Dy_2: "Participates in making neodymium magnet structure alloys",
  appli_Dy_3: "Used in control rods for nuclear reactors",
  
  appli_Ho_1: "Used in nuclear reactors",
  appli_Ho_2: "Used to create magnets",
  appli_Ho_3: "Used in medical laser systems",
  
  appli_Er_1: "Used in dental laser systems",
  appli_Er_2: "Used as a coloring agent for glass",
  appli_Er_3: "Incorporated into glass fibers to transmit bandwidth signals",
  
  appli_Tm_1: "Utilized in medical laser systems",
  appli_Tm_2: "Treats cancer",
  appli_Tm_3: "Treats bladder conditions",
  
  appli_Yb_1: "Used in medical laser systems",
  appli_Yb_2: "Used as an industrial catalyst",
  appli_Yb_3: "Used in X-ray machines",
  
  appli_Lu_1: "Often used for research purposes",
  appli_Lu_2: "Treats cancer",
  appli_Lu_3: "Used in oil refining plants",
  
  appli_Hf_1: "Used to make filament wires",
  appli_Hf_2: "Used to make electrodes",
  appli_Hf_3: "Used as control rods in nuclear reactors",
  
  appli_Ta_1: "Used as surgical instruments",
  appli_Ta_2: "Used as electrodes for neon lights",
  appli_Ta_3: "Tantalum capacitors are used in mobile phones",
  
  appli_W_1: "Used as tungsten lamp filaments, vacuum tube filaments",
  appli_W_2: "Used as electrodes",
  appli_W_3: "Used as interconnect materials between chips",
  
  appli_Re_1: "Used to manufacture jet engines",
  appli_Re_2: "Treats liver cancer",
  appli_Re_3: "Used as X-ray sources",
  
  appli_Os_1: "Used for fingerprint detection",
  appli_Os_2: "Used in material research",
  appli_Os_3: "Used as a catalyst in the industrial sector",
  
  appli_Ir_1: "Used as fountain pen nibs",
  appli_Ir_2: "Used as a catalyst in petroleum refining",
  appli_Ir_3: "Used in solar energy absorption devices",
  
  appli_Pt_1: "Manufactures platinum jewelry",
  appli_Pt_2: "Produces laboratory equipment",
  appli_Pt_3: "Used in thermometer production",
  
  appli_Au_1: "Manufactures jewelry such as necklaces, rings, ...",
  appli_Au_2: "Gold injections help reduce pain and swelling from arthritis",
  appli_Au_3: "Applied in medical devices",
  
  appli_Hg_1: "Used in thermometers, barometers, blood pressure gauges, ...",
  appli_Hg_2: "Is a component in some electronic lamps",
  appli_Hg_3: "Used to separate gold and silver in mining ores",
  
  appli_Tl_1: "Applied as rodenticides and insecticides",
  appli_Tl_2: "Can be used to treat certain skin conditions",
  appli_Tl_3: "Used in optical glass manufacturing",
  
  appli_Pb_1: "Primary component in car batteries",
  appli_Pb_2: "Used as a white pigment in paint",
  appli_Pb_3: "Used as shielding against nuclear radiation particles",
  
  appli_Bi_1: "Bismanol alloys create very strong permanent magnets",
  appli_Bi_2: "Used for fire detection",
  appli_Bi_3: "Bismuth drugs help treat gastrointestinal disorders",
  
  appli_Po_1: "Provides warmth for spacecraft components",
  appli_Po_2: "Used as power sources for artificial satellites",
  appli_Po_3: "Is a component aimed at igniting atomic bombs",
  
  appli_At_1: "Astatine compounds help reduce the effects of cancer cells",
  appli_At_2: "Used to optimize cancer therapy",
  appli_At_3: "Applied as nuclear fuel",
  
  appli_Rn_1: "Produces luminescent lamps",
  appli_Rn_2: "Used in radiation therapy for cancer treatment",
  appli_Rn_3: "Used to check for air tightness in architecture",
  
  appli_Fr_1: "Used to study heavy atomic structure",
  appli_Fr_2: "Used to study nuclear reactions",
  appli_Fr_3: "Due to its rarity and high radioactivity, Francium doesn't have many practical applications",
  
  appli_Ra_1: "Manufactures luminous decorative items",
  appli_Ra_2: "Used in radiation therapy for cancer",
  appli_Ra_3: "Used in aesthetic devices",
  
  appli_Ac_1: "Applied in cancer and lung disease treatments",
  appli_Ac_2: "Used to study nuclear reactions",
  appli_Ac_3: "Due to its rarity and high radioactivity, Actinium doesn't have many practical applications",
  
  appli_Th_1: "Used to enhance aircraft engine durability",
  appli_Th_2: "Used as nuclear fuel",
  appli_Th_3: "Effective radiation shielding material",
  
  appli_Pa_1: "Used for geological age research",
  appli_Pa_2: "Used to study nuclear reactions",
  appli_Pa_3: "Due to its rarity and high radioactivity, Protactinium doesn't have many practical applications",
  
  appli_U_1: "Used in bullet production",
  appli_U_2: "Used as fuel in submarines",
  appli_U_3: "Used as a coloring agent for glass, ceramics",
  
  appli_Np_1: "Used in neutron detection devices",
  appli_Np_2: "Used to study nuclear reactions",
  appli_Np_3: "Due to its rarity and high radioactivity, Neptunium doesn't have many practical applications",
  
  appli_Pu_1: "Nuclear reactor fuel",
  appli_Pu_2: "A component in nuclear weapons",
  appli_Pu_3: "Provides energy for spacecraft",
  
  appli_Am_1: "Used in material composition analyzers",
  appli_Am_2: "Component of ionization smoke detectors",
  appli_Am_3: "Used to study nuclear reactions",
  
  appli_Cm_1: "Provides energy for spacecraft",
  appli_Cm_2: "Used in material composition analyzers",
  appli_Cm_3: "Used to study nuclear reactions",
  
  appli_Bk_1: "Used to study nuclear reactions",
  appli_Bk_2: "Used to study radiation therapy",
  appli_Bk_3: "Due to its rarity and high radioactivity, Berkelium doesn't have many practical applications",
  
  
  appli_Cf_1: "Helps treat cancer",
  appli_Cf_2: "Is a component in metal detectors",
  appli_Cf_3: "Used for research on nuclear reactions",
  
  appli_Es_1: "Measures the age of radioactive-containing objects",
  appli_Es_2: "Used in nuclear particle analysis and nuclear medicine",
  appli_Es_3: "Studies radioactive decay and its effects on the body",
  
  appli_Fm_1: "Investigates the decay processes of transuranium elements",
  appli_Fm_2: "Material target in nuclear reactors",
  appli_Fm_3: "Used as a high-energy alpha particle source in research",
  
  appli_Md_1: "Discovers the properties of heavy elements",
  appli_Md_2: "Serves scientific research",
  appli_Md_3: "Explores some chemical properties of mendelevium in solution",
  
  appli_No_1: "Used to create other heavy elements",
  appli_No_2: "Used in scientific research",
  appli_No_3: "Due to its rarity and high radioactivity, Nobelium does not have many practical applications",
  
  appli_Lr_1: "Studies the structure of atomic nuclei",
  appli_Lr_2: "Helps understand the nature of matter",
  appli_Lr_3: "Due to its rarity and high radioactivity, Lawrencium does not have many practical applications",
  
  appli_Rf_1: "Used to create other heavy elements",
  appli_Rf_2: "Used in scientific research",
  appli_Rf_3: "Due to its rarity and high radioactivity, Rutherfordium does not have many practical applications",
  
  appli_Db_1: "Used in nuclear research",
  appli_Db_2: "Used in material research",
  appli_Db_3: "Due to its rarity and high radioactivity, Dubnium does not have many practical applications",
  
  appli_Sg_1: "Used in nuclear research",
  appli_Sg_2: "Used in material research",
  appli_Sg_3: "Due to its rarity and high radioactivity, Seaborgium does not have many practical applications",
  
  appli_Bh_1: "Used in nuclear research",
  appli_Bh_2: "Used in material research",
  appli_Bh_3: "Due to its rarity and high radioactivity, Bohrium does not have many practical applications",
  
  appli_Hs_1: "Used in nuclear research",
  appli_Hs_2: "Used in material research",
  appli_Hs_3: "Due to its rarity and high radioactivity, Hassium does not have many practical applications",
  
  appli_Mt_1: "Used in nuclear research",
  appli_Mt_2: "Used in material research",
  appli_Mt_3: "Due to its rarity and high radioactivity, Meitnerium does not have many practical applications",
  
  appli_Ds_1: "Used in nuclear research",
  appli_Ds_2: "Used in material research",
  appli_Ds_3: "Due to its rarity and high radioactivity, Darmstadtium does not have many practical applications",
  
  appli_Rg_1: "Used in nuclear research",
  appli_Rg_2: "Used in material research",
  appli_Rg_3: "Due to its rarity and high radioactivity, Roentgenium does not have many practical applications",
  
  appli_Cn_1: "Used in nuclear research",
  appli_Cn_2: "Used in material research",
  appli_Cn_3: "Due to its rarity and high radioactivity, Copernicium does not have many practical applications",
  
  appli_Nh_1: "Used in nuclear research",
  appli_Nh_2: "Used in material research",
  appli_Nh_3: "Due to its rarity and high radioactivity, Nihonium does not have many practical applications",
  
  appli_Fl_1: "Used in nuclear research",
  appli_Fl_2: "Used in material research",
  appli_Fl_3: "Due to its rarity and high radioactivity, Flerovium does not have many practical applications",
  
  appli_Mc_1: "Contributes to understanding atomic structure",
  appli_Mc_2: "Advances in the field of nuclear physics",
  appli_Mc_3: "Due to its rarity and high radioactivity, Moscovium does not have many practical applications",
  
  appli_Lv_1: "Participates in nuclear transmutation reactions with other nuclei",
  appli_Lv_2: "Predicts and understands processes related to nuclear physics",
  appli_Lv_3: "Due to its rarity and high radioactivity, Livermorium does not have many practical applications",
  
  appli_Ts_1: "Tennessine may be used in nuclear physics research",
  appli_Ts_2: "Tennessine aids in inorganic chemistry research",
  appli_Ts_3: "Due to its rarity and high radioactivity, Tennessine does not have many practical applications",
  
  appli_Og_1: "Used in nuclear research",
  appli_Og_2: "Used to study heavy atomic structure",
  appli_Og_3: "Due to its rarity and high radioactivity, Oganesson does not have many practical applications",
  },
  "vn": {
  
  appli_H_1: "Bơm vào khinh khí cầu vì là không khí nhẹ nhất",
  appli_H_2: "Làm nhiên liệu của động cơ xe thay thế cho xăng",
  appli_H_3: "Dùng trong đèn xì để hàn cắt kim loại",
  
  appli_He_1: "Thường được bơm vào bóng bay",
  appli_He_2: "Truyền vào máy thở cho các bệnh nhân có vấn đề về hô hấp",
  appli_He_3: "Chiếm 80% trong bình khí nhân tạo của các thợ lặn",
  
  appli_Li_1: "Chế tạo pin lithi có năng lượng cao hơn pin thường",
  appli_Li_2: "Sử dụng để tăng hiệu quả thuốc trầm cảm",
  appli_Li_3: "Giúp quá trình nhào nặn thuỷ tinh dễ dàng hơn",
  
  appli_Be_1: "Sử dụng trong các bo mạch điện tử",
  appli_Be_2: "Sử dụng để làm ống nước, vòi phun nước chữa cháy",
  appli_Be_3: "Sử dụng trong nội thất xe hơi",
  
  appli_B_1: "Được cho vào thuốc chống loãng xương, viêm khớp",
  appli_B_2: "Axit Boric dùng làm thuốc nhỏ mắt vì tính chống nhiễm trùng",
  appli_B_3: "Là thành phần chính của phân bón Boric giúp cây xanh tốt",
  
  appli_C_1: "Kim cương: làm đồ trang sức",
  appli_C_2: "Than chì: làm ruột bút chì đen",
  appli_C_3: "Than muội: làm mực in, chất tạo màu đen",
  
  appli_N_1: "Nitơ lỏng giúp bảo quản máu và các mẫu sinh học",
  appli_N_2: "Dùng trong việc sấy khô thực phẩm",
  appli_N_3: "Áp dụng vào khí cắt laser",
  
  appli_O_1: "Duy trì sự sống, sự cháy",
  appli_O_2: "Sử dụng trong công nghiệp hóa chất, làm thuốc nổ",
  appli_O_3: "Chứa phần lớn cho phi công trong các trường hợp không khí loãng",
  
  appli_F_1: "Được thêm vào kem đánh răng vì kích thích tế bào xương",
  appli_F_2: "Sử dụng làm chất cách điện",
  appli_F_3: "Dùng trong công nghiệp sản xuất hạt nhân",
  
  appli_Ne_1: "Đèn neon được sử dụng làm biển quảng cáo",
  appli_Ne_2: "Được sử dụng trong ống âm cực trong TV",
  appli_Ne_3: "Được sử dụng trong các ống laser",
  
  appli_K_1: "Là thành phần chính của phân bón NPK giúp cây phát triển",
  appli_K_2: "Potassium chloride dùng trị bệnh thiếu kali trong máu",
  appli_K_3: "Potassium sodium tartrate là thành phần chính trong bột nở",
  
  appli_Ca_1: "Dùng làm thực phẩm chức năng bổ sung canxi",
  appli_Ca_2: "Sử dụng trong sản xuất xi-măng",
  appli_Ca_3: "Là chất chống oxi hoá cho các hợp kim",
  
  appli_Al_1: "Nội thất nhà cửa và dụng cụ làm bếp",
  appli_Al_2: "Được sử dụng trong sản xuất lon nước ngọt và màng thực phẩm",
  appli_Al_3: "Được sử dụng để xây dựng khung xe hơi",
  
  appli_Na_1: "Được dùng để chống đóng băng và khử băng trên đường phố",
  appli_Na_2: "Là thành phần trong dầu gội, xà phòng, kem đánh răng,…",
  appli_Na_3: "Có trong muối ăn, bột soda và bột nổi",
  
  appli_Mg_1: "Sử dụng như vật liệu chịu lửa trong các lò sản xuất",
  appli_Mg_2: "Dùng trong chế tạo ô tô, máy móc",
  appli_Mg_3: "Thuốc magnesium cung cấp magie có tác dụng nhuận tràng",
  
  appli_Si_1: "Giúp chế tạo pin mặt trời",
  appli_Si_2: "Tạo ra loại thép silic có thể chịu axit",
  appli_Si_3: "Ứng dụng trong xây dựng như bê tông, đất sét, cát và xi-măng",
  
  appli_P_1: "Phốt pho là thành phần quan trọng trong phân bón đặc biệt là phân lân",
  appli_P_2: "Phốt pho còn xuất hiện trong pháo hoa",
  appli_P_3: "Phốt pho đóng vai trò quan trọng trong quá trình tạo ra thép",
  
  appli_S_1: "Hỗ trợ sản xuất thuốc súng, pháo hoa, diêm,…",
  appli_S_2: "Dùng làm phân bón DAP cung cấp dưỡng chất cho cây",
  appli_S_3: "Một số mỹ phẩm có sulfur giúp tẩy tế bào chết da",
  
  appli_Cl_1: "Chlorine được sử dụng rộng rãi để khử trùng nước uống và nước bể bơi",
  appli_Cl_2: "Chlorine là nguyên liệu quan trọng trong sản xuất nhiều loại hóa chất công nghiệp",
  appli_Cl_3: "Chlorine là thành phần chính trong nhiều loại chất tẩy trắng và khử trùng trong gia đình",
   
  appli_Ar_1: "Phương pháp phẫu thuật bằng Argon giúp loại bỏ u và mô bệnh",
  appli_Ar_2: "Được bơm vào bóng đèn để chống oxy hoá dây tóc",
  appli_Ar_3: "Áp dụng vào hằn cắt kim loại plasma",
  
  appli_Sc_1: "Scandium được sử dụng ở lĩnh vực ánh sáng, nó giúp cho các bóng đèn sáng hơn",
  appli_Sc_2: "Hợp kim Nhôm-Scandium xuất hiện trong các bộ phận máy bay",
  appli_Sc_3: "Các dụng cụ thể thao cao cấp cũng sử dụng nguyên liệu này",
  
  appli_Ti_1: "Titanium được sử dụng trong chế tạo bộ phận máy bay và tàu vũ trụ do tỷ lệ sức mạnh trên trọng lượng cao và khả năng chịu nhiệt tốt",
  appli_Ti_2: "Titanium được sử dụng để chế tạo các thiết bị y tế cấy ghép nha khoa",
  appli_Ti_3: "Titanium được sử dụng trong công nghiệp hóa chất và năng lượng",
  
  appli_V_1: "Sử dụng để tạo ra thuỷ tinh có màu xanh da trời và lục",
  appli_V_2: "Chế tạo ra pin Vanadium sử dụng năng lượng xanh",
  appli_V_3: "Tăng tính chịu lạnh của thép",
  
  appli_Cr_1: "Đóng vai trò quan trọng trong quá trình làm thép không gỉ",
  appli_Cr_2: "Dùng để mạ các nguyên liệu khác để khiến chúng trở nên cứng hơn",
  
  appli_Mn_1: "Dùng để sản xuất thép và hợp kim",
  appli_Mn_2: "Được sử dụng trong các loại pin sạc, pin kiềm và pin kẽm-carbon",
  appli_Mn_3: "Các hợp chất của manganese được sử dụng làm chất màu trong các loại thủy tinh",
  
  appli_Fe_1: "Chế tạo đồ gia dụng, đồ dùng cá nhân, máy móc,…",
  appli_Fe_2: "Dùng làm khung lưới, giàn giáo, cầu đường trong xây dựng",
  appli_Fe_3: "Thuốc bổ sung iron giúp điều trị thiếu máu",
  
  appli_Co_1: "Lithium cobalt oxide được sử dụng bên trong pin",
  appli_Co_2: "Bột cobalt còn dùng để trang trí cho các sản phẩm làm từ sứ",
  appli_Co_3: "Cobalt được sử dụng để làm ra nam châm Samarium Cobalt (SmCo)",
  
  appli_Ni_1: "Nickel là thành phần quan trọng trong sản xuất thép không gỉ",
  appli_Ni_2: "Nickel được dùng trong nhiều loại pin và trong các thiết bị điện tử",
  appli_Ni_3: "Nickel được sử dụng để mạ các bề mặt kim loại, tạo ra lớp phủ chống ăn mòn",
  
  appli_Cu_1: "Được sử dụng để làm dây điện",
  appli_Cu_2: "Đồng và các hợp kim của nó được sử dụng trong các thiết bị y tế",
  appli_Cu_3: "Được sử dụng để làm trang sức",
  
  appli_Zn_1: "Zinc oxide là một thành phần trong sơn trắng",
  appli_Zn_2: "Dùng để mạ kim loại, phổ biến là thép và sắt",
  appli_Zn_3: "Zinc dạng cuộn được sử dụng làm vỏ pin",
  
  appli_Ga_1: "Gallium được sử dụng trong động cơ tên lửa",
  appli_Ga_2: "Gallium được sử dụng để chẩn đoán các bệnh như ung thư hạch",
  appli_Ga_3: "Gallium arsenide là hợp chất có khả năng tạo ra chip tần số vô tuyến cho điện thoại di động và hệ thống thông tin vệ tinh",
  
  appli_Ge_1: "Germanium là một trong những vật liệu bán dẫn đầu tiên được sử dụng để sản xuất transistor và diode",
  appli_Ge_2: "Germanium được sử dụng làm chất nền trong sản xuất tế bào năng lượng mặt trời đa nối",
  
  appli_As_1: "Được sử dụng làm thuốc trừ sâu",
  appli_As_2: "Dùng vào thuốc tiêu diệt các tế bào ung thư",
  appli_As_3: "Làm tăng độ trong suốt của các sản phẩm kính và gốm sứ",
  
  appli_Se_1: "Thuốc Selenium giúp chống oxy hoá và bệnh ung thư",
  appli_Se_2: "Tạo ra màu đỏ cho men thuỷ tinh",
  appli_Se_3: "Là thành phần trong nhiều loại dầu gội chống gàu",
  
  appli_Br_1: "Bromine đã từng được sử dụng như một chất trừ sâu trong quá khứ",
  appli_Br_2: "Bromine đã sử dụng trong các chất chống cháy",
  appli_Br_3: "Bromine được sử dụng để tạo chất khử trùng",
  
  appli_Kr_1: "Có trong các đèn huỳnh quang tiết kiệm năng lượng",
  appli_Kr_2: "Dùng làm bóng đèn sợi đốt",
  appli_Kr_3: "Sử dụng trong các nháy sáng cho nhiếp ảnh tốc độ cao",
  
  appli_Rb_1: "Rubidium được sử dụng trong các đồng hồ nguyên tử",
  appli_Rb_2: "Rubidium là một lựa chọn chọn phổ biến cho các thí nghiệm về làm lạnh laser và bẫy nguyên tử",
  appli_Rb_3: "Rubidium được sử dụng trong kỹ thuật chụp cắt lớp phát xạ để nghiên cứu lưu lượng",
  
  appli_Sr_1: "Dùng để sản xuất màn hình CRT của tivi",
  appli_Sr_2: "Là thành phần trong thuốc trị loãng xương",
  appli_Sr_3: "Ứng dụng vào sản xuất pháo hoa",
  
  appli_Y_1: "Yttrium được sử dụng nghành laser",
  appli_Y_2: "Yttrium oxit được sử dụng trong nhiều loại gốm sứ",
  appli_Y_3: "Yttrium còn được sử dụng trong quá trình sản xuất điện thoại di động và các công nghệ khác",
  
  appli_Zr_1: "Là chất tạo đục trong sản xuất gốm sứ",
  appli_Zr_2: "Được sử dụng chủ yếu trong năng lượng hạt nhân",
  appli_Zr_3: "Sử dụng để sản xuất dụng cụ phẫu thuật y tế",
  
  appli_Nb_1: "Niobium được sử dụng chủ yếu trong việc sản xuất các hợp kim đặc biệt",
  appli_Nb_2: "Niobium được sử dụng trong các ứng dụng đòi hỏi tính siêu dẫn",
  appli_Nb_3: "Niobium có ứng dụng trong sản xuất tụ điện niobium",
  
  appli_Mo_1: "Làm chất bôi trơn trên bề mặt kim loại vì khả năng chịu nhiệt tốt",
  appli_Mo_2: "Phân bón Molybdenum kích thích cây sinh trưởng",
  appli_Mo_3: "Thuốc Molybdenum giúp phòng ngừa thiếu máu",
  
  appli_Tc_1: "Có trong thuốc chẩn đoán các bệnh ung thư",
  appli_Tc_2: "Ít được sử dụng rộng rãi do tính phóng xạ cao",
  appli_Tc_3: "Được sử dụng để \"cường hóa\" cho các kim loại; số lượng kim loại thực hiện được quá trình này khép kín do tính phóng xạ của nguyên tố này",
  
  appli_Ru_1: "Được sử dụng trong pin mặt trời",
  appli_Ru_2: "Làm chất xúc tác cho nhiều phản ứng hoá học",
  appli_Ru_3: "Là lớp phủ chống ăn mòn cho các kim loại khác",
  
  appli_Rh_1: "Xúc tác giúp giảm lượng khí thải xe ô tô",
  appli_Rh_2: "Được mạ trên vàng trắng để làm đồ trang sức",
  appli_Rh_3: "Tạo ra các loại bút mực chất lượng cao",
  
  appli_Pd_1: "Làm chất xúc tác cho các quá trình hidro hoá",
  appli_Pd_2: "Sản xuất tụ điện gốm nhiều lớp",
  appli_Pd_3: "Dùng làm trang sức thay cho platin hay vàng trắng",
  
  appli_Ag_1: "Sản xuất sản phẩm điện và điện tử",
  appli_Ag_2: "Chế tạo đồ trang sức bằng bạc như vòng cổ, nhẫn,…",
  appli_Ag_3: "Sử dụng làm các loại gương",
  
  appli_Cd_1: "Được sử dụng trong việc sản xuất pin",
  appli_Cd_2: "Làm chất chống bào mòn cho sắt thép",
  appli_Cd_3: "Sử dụng để sản xuất một số linh kiện điện tử",
  
  appli_In_1: "Sử dụng trong tấm pin năng lượng mặt trời",
  appli_In_2: "Làm màn hình LCD trong máy tính bảng, điện thoại thông minh,…",
  appli_In_3: "Khuếch đại sợi quang giúp tăng việc truyền tín hiệu",
  
  appli_Sn_1: "Có tác dụng tráng lên vỏ hộp thực phẩm, nước giải khát,…",
  appli_Sn_2: "Chế tạo đèn trang trí và đồ gia dụng",
  appli_Sn_3: "Được mạ lên bề mặt kim loại để chống ăn mòn",
  
  appli_Sb_1: "Chất Antimony trioxide giúp làm chậm cháy",
  appli_Sb_2: "Sử dụng làm ắc quy của ô tô",
  appli_Sb_3: "Có trong chất làm mịn và khử màu gốm sứ",
  
  appli_Te_1: "Được sử dụng trong sản xuất pin mặt trời",
  appli_Te_2: "Được sử dụng để nhuộm màu gốm sứ và thủy tinh",
  appli_Te_3: "Sử dụng để tăng độ chống acid và độ bền của kim loại",
  
  appli_I_1: "Thuốc bôi iodine được dùng để khử trùng vết thương",
  appli_I_2: "Thực phẩm bổ sung iodine giúp tăng cường hormone tuyến giáp",
  appli_I_3: "Muối iodine kali giúp điều trị nạn nhân hạt nhân",
  
  appli_Xe_1: "Được sử dụng trong các nguồn sáng chuyên dụng",
  appli_Xe_2: "Được sử dụng để giữ các vệ tinh ở trong quỹ đạo của riêng nó",
  appli_Xe_3: "Sử dụng trong chụp cộng hưởng từ (MRI) các nội tạng",
  
  appli_Cs_1: "Áp dụng vào tia laser năng lượng cao và đèn huỳnh quang",
  appli_Cs_2: "Sử dụng trong đồng hồ nguyên tử chính xác cao",
  appli_Cs_3: "Là chất xúc tác trong một số quá trình hidro hoá",
  
  appli_Ba_1: "Barium nitrate làm cho pháo hoa có màu lục",
  appli_Ba_2: "Barium carbonate được sử dụng trong ngành gốm sứ để tạo nên các hiệu ứng đặc biệt",
  appli_Ba_3: "Barium oxide (BaO) được sử dụng trong việc làm thủy tinh, thạch anh và sứ",
  
  appli_La_1: "Được sử dụng trong các máy chiếu phim",
  appli_La_2: "Giúp cải thiện độ chịu va chạm của kim loại",
  appli_La_3: "Có trong các sản phẩm loại bỏ tảo ở bể bơi",
  
  appli_Ce_1: "Là thành phần trong một số thuốc chống gây nôn",
  appli_Ce_2: "Sử dụng làm chất đánh bóng cho thuỷ tinh, kính",
  appli_Ce_3: "Thuỷ tinh và kính làm từ cerium oxide giúp giảm hấp thụ tia cực tím",
  
  appli_Pr_1: "Praseodymium tạo cho thủy tinh và men thủy tinh màu vàng",
  appli_Pr_2: "Praseodymium là thành phần lõi của đèn hồ quang",
  appli_Pr_3: "Được sử dụng trong động cơ máy bay",
  
  appli_Nd_1: "Nam châm được tạo từ Neodymium là loại nam châm vĩnh cửu mạnh nhất hiện tại",
  appli_Nd_2: "Được dùng để chế tạo tàu điện cao tốc",
  appli_Nd_3: "Nam châm Neodymium được dùng trong máy tạo ảnh tự động cộng hưởng từ MRI",
  
  appli_Pm_1: "Rất ít Promethium được sử dụng để làm pin nguyên tử chuyên dụng",
  appli_Pm_2: "Được sử dụng để làm nguồn tia X và chất phóng xạ trong các dụng cụ đo lường",
  appli_Pm_3: "Promethium thường được sử dụng cho các nghiên cứu khoa học",
  
  appli_Sm_1: "Được dùng làm nguyên liệu chế tạo các động cơ, thiết bị trong ngành điện-điện tử",
  appli_Sm_2: "Được sử dụng trong laser",
  appli_Sm_3: "Sử dụng để tạo nam châm cho tai nghe",
  
  appli_Eu_1: "Được sử dụng trong việc in tiền giấy euro",
  appli_Eu_2: "Được sử dụng làm vật liệu laser",
  appli_Eu_3: "Thường được sử dụng trong các nghiên cứu về địa hóa học",
  
  appli_Gd_1: "Sử dụng để cường hóa khả năng chịu nhiệt cao của các kim loại",
  appli_Gd_2: "Tạo nam châm, linh kiện điện tử, đĩa lưu trữ dữ liệu",
  appli_Gd_3: "Sử dụng trong phần lõi của các lò phản ứng hạt nhân",
  
  appli_Tb_1: "Được sử dụng các bóng đèn thấp và đèn lưu huỳnh",
  appli_Tb_2: "Được sử dụng để tăng độ an toàn khi sử dụng chụp X-quang",
  appli_Tb_3: "Muối Terbium được sử dụng trong các thiết bị laser",
  
  appli_Dy_1: "Dysprosium iodide được sử dụng trong đèn phóng điện halogenua",
  appli_Dy_2: "Tham gia làm hợp kim cấu tạo nam châm neodymium",
  appli_Dy_3: "Được sử dụng trong các thanh điều khiển lò phản ứng hạt nhân",
  
  appli_Ho_1: "Được sử dụng trong lò phản ứng hạt nhân",
  appli_Ho_2: "Được sử dụng để tạo thành nam châm",
  appli_Ho_3: "Được sử dụng trong các hệ thống laser y khoa",
  
  appli_Er_1: "Được sử dụng trong hệ thống laser nha khoa",
  appli_Er_2: "Được sử dụng như chất tạo màu cho kính",
  appli_Er_3: "Được đưa vào sợi thủy tinh để truyền các tín hiệu băng thông",
  
  appli_Tm_1: "Được sử dụng trong hệ thống laser trong y khoa",
  appli_Tm_2: "Điều trị ung thư",
  appli_Tm_3: "Điều trị bàng quang",
  
  appli_Yb_1: "Được sử dụng trong hệ thống laser trong y khoa",
  appli_Yb_2: "Được sử dụng như 1 chất xúc tác công nghiệp",
  appli_Yb_3: "Được sử dụng trong máy X-quang",
  
  appli_Lu_1: "Thường được sử dụng cho mục đích nghiên cứu",
  appli_Lu_2: "Điều trị ung thư",
  appli_Lu_3: "Được sử dụng các nhà máy lọc dầu",
  
  appli_Hf_1: "Được làm ra sợi dây tóc điện",
  appli_Hf_2: "Được làm ra các điện cực",
  appli_Hf_3: "Dùng để làm thanh điều khiển trong lò phản ứng hạt nhân",
  
  appli_Ta_1: "Được dùng làm dụng cụ phẫu thuật",
  appli_Ta_2: "Được dùng làm điện cực cho đèn neon",
  appli_Ta_3: "Tụ điện Tantalum được sử dụng trong điện thoại di động",
  
  appli_W_1: "Được sử dụng làm dây tóc bóng đèn, sợi ống chân không",
  appli_W_2: "Được sử dụng làm điện cực",
  appli_W_3: "Được làm vật liệu kết nối giữa các vi mạch",
  
  appli_Re_1: "Được sử dụng để chế tạo động cơ phản lực",
  appli_Re_2: "Điều trị ung thu gan",
  appli_Re_3: "Làm các nguồn tia X",
  
  appli_Os_1: "Được sử dụng để phát hiện vân tay",
  appli_Os_2: "Được sử dụng trong nghiên cứu vật liệu",
  appli_Os_3: "Được sử dụng như chất xúc tác trong ngành công nghiệp",
  
  appli_Ir_1: "Sử dụng làm ngòi bút bút máy",
  appli_Ir_2: "Làm chất xúc tác trong quá trình sản xuất xăng dầu",
  appli_Ir_3: "Sử dụng trong thiết bị hấp thu năng lượng mặt trời",
  
  appli_Pt_1: "Chế tạo đồ trang sức platin",
  appli_Pt_2: "Sản xuất trang thiết bị phòng thí nghiệm",
  appli_Pt_3: "Sử dụng trong việc tạo ra nhiệt kế",
  
  appli_Au_1: "Chế tạo đồ trang sức như vòng cổ, nhẫn,…",
  appli_Au_2: "Tiêm vàng giúp giảm đau và sưng do thấp khớp",
  appli_Au_3: "Ứng dụng làm thiết bị y tế",
  
  appli_Hg_1: "Sử dụng trong nhiệt kế, áp suất kế, huyết áp kế,…",
  appli_Hg_2: "Là thành phần trong một số đèn điện tử",
  appli_Hg_3: "Dùng để tách vàng và bạc trong các quặng khai thác",
  
  appli_Tl_1: "Ứng dụng làm thuốc diệt chuột và côn trùng",
  appli_Tl_2: "Có thể dùng điều trị một số bệnh da liễu",
  appli_Tl_3: "Sử dụng để chế tạo kính quang học",
  
  appli_Pb_1: "Thành phần chính tạo nên ắc quy xe",
  appli_Pb_2: "Sử dụng như chất nhuộm trắng trong sơn",
  appli_Pb_3: "Dùng làm các tấm ngăn chống phóng xạ hạt nhân",
  
  appli_Bi_1: "Hợp kim Bismanol tạo ra nam châm vĩnh cửu rất mạnh",
  appli_Bi_2: "Sử dụng để phát hiện cháy nổ",
  appli_Bi_3: "Thuốc Bismuth giúp điều trị các chứng rối loạn dạ dày",
  
  appli_Po_1: "Làm nguồn nhiệt giữ ấm cho những linh kiện của phi thuyền vũ trụ",
  appli_Po_2: "Sử dụng làm pin phát điện cho các vệ tinh nhân tạo",
  appli_Po_3: "Là một thành phần nhằm châm ngòi bom nguyên tử",
  
  appli_At_1: "Hợp chất Astatine giúp giảm tác dụng của các tế bào ung thư",
  appli_At_2: "Sử dụng để nghiên cứu nhằm tối ưu hoá trị ung thư",
  appli_At_3: "Ứng dụng làm nhiên liệu hạt nhân",
  
  appli_Rn_1: "Sản xuất đèn phát quang",
  appli_Rn_2: "Sử dụng trong quá trình xạ trị chữa ung thư",
  appli_Rn_3: "Được dùng để kiểm tra độ kín trong kiến trúc",
  
  appli_Fr_1: "Sử dụng để nghiên cứu về cấu trúc nguyên tử nặng",
  appli_Fr_2: "Sử dụng để nghiên cứu về phản ứng hạt nhân",
  appli_Fr_3: "Do tính khan hiếm và phóng xạ cao, Francium không có nhiều ứng dụng thực tiễn",
  
  appli_Ra_1: "Chế tạo đồ trang trí phát sáng",
  appli_Ra_2: "Sử dụng trong liệu pháp xạ trị ung thư",
  appli_Ra_3: "Được dùng trong thiết bị thẩm mỹ",
  
  appli_Ac_1: "Ứng dụng trong điều trị ung thư và bệnh phổi",
  appli_Ac_2: "Sử dụng để nghiên cứu về phản ứng hạt nhân",
  appli_Ac_3: "Do tính khan hiếm và phóng xạ cao, Actinium không có nhiều ứng dụng thực tiễn",
  
  
  appli_Th_1: "Dùng để tăng độ bền cho động cơ máy bay",
  appli_Th_2: "Sử dụng làm nhiên liệu hạt nhân",
  appli_Th_3: "Là tấm chắn phóng xạ hiệu quả",
  
  appli_Pa_1: "Sử dụng để nghiên cứu về tuổi địa chất",
  appli_Pa_2: "Sử dụng để nghiên cứu về phản ứng hạt nhân",
  appli_Pa_3: "Do tính khan hiếm và phóng xạ cao, Protactinium không có nhiều ứng dụng thực tiễn",
  
  appli_U_1: "Dùng trong sản xuất đầu đạn",
  appli_U_2: "Sử dụng làm nhiên liệu trên tàu ngầm",
  appli_U_3: "Làm chất tạo màu cho thuỷ tinh, gốm sứ",
  
  appli_Np_1: "Dùng trong các thiết bị phát hiện neutron",
  appli_Np_2: "Sử dụng để nghiên cứu về phản ứng hạt nhân",
  appli_Np_3: "Do tính khan hiếm và phóng xạ cao, Neptunium không có nhiều ứng dụng thực tiễn",
  
  appli_Pu_1: "Làm nhiên liệu cho các lò phản ứng hạt nhân",
  appli_Pu_2: "Là một thành phần trong vũ khí hạt nhân",
  appli_Pu_3: "Cung cấp năng lượng cho tàu vũ trụ",
  
  appli_Am_1: "Sử dụng trong máy phân tích thành phần vật liệu",
  appli_Am_2: "Là thành phần của máy dò khói ion hoá",
  appli_Am_3: "Sử dụng để nghiên cứu về phản ứng hạt nhân",
  
  appli_Cm_1: "Giúp cung cấp năng lượng cho tàu vũ trụ",
  appli_Cm_2: "Sử dụng trong máy phân tích thành phần vật liệu",
  appli_Cm_3: "Sử dụng để nghiên cứu về phản ứng hạt nhân",
  
  appli_Bk_1: "Sử dụng để nghiên cứu về phản ứng hạt nhân",
  appli_Bk_2: "Sử dụng để nghiên cứu về liệu pháp xạ trị",
  appli_Bk_3: "Do tính khan hiếm và phóng xạ cao, Berkelium không có nhiều ứng dụng thực tiễn",
  
  appli_Cf_1: "Giúp điều trị bệnh ung thư",
  appli_Cf_2: "Là một thành phần trong máy dò kim loại",
  appli_Cf_3: "Sử dụng để nghiên cứu về phản ứng hạt nhân",
  
  appli_Es_1: "Đo tuổi của các vật thể chứa phóng xạ",
  appli_Es_2: "Sử dụng trong phân tích hạt nhân và pháp y học hạt nhân",
  appli_Es_3: "Nghiên cứu phân rã phóng xạ và tác động nó lên cơ thể",
  
  appli_Fm_1: "Điều tra quá trình phân rã của các nguyên tố transuranium",
  appli_Fm_2: "Vật liệu mục tiêu trong các lò phản ứng hạt nhân",
  appli_Fm_3: "Sử dụng như một nguồn alpha hạt năng lượng cao trong nghiên cứu",
  
  appli_Md_1: "Khám phá tính chất của nguyên tố nặng",
  appli_Md_2: "Phục vụ cho nghiên cứu khoa học",
  appli_Md_3: "Tìm hiểu một số hóa tính của mendelevium trong dung dịch",
  
  appli_No_1: "Được sử dụng để tạo ra các nguyên tố nặng khác",
  appli_No_2: "Được sử dụng trong nghiên cứu khoa học",
  appli_No_3: "Do tính khan hiếm và phóng xạ cao, Nobelium không có nhiều ứng dụng thực tiễn",
  
  appli_Lr_1: "Nghiên cứu cấu tạo của hạt nhân nguyên tử",
  appli_Lr_2: "Giúp hiểu rõ hơn về bản chất của vật chất",
  appli_Lr_3: "Do tính khan hiếm và phóng xạ cao, Lawrencium không có nhiều ứng dụng thực tiễn",
  
  appli_Rf_1: "Được sử dụng để tạo ra các nguyên tố nặng khác",
  appli_Rf_2: "Được sử dụng trong nghiên cứu khoa học",
  appli_Rf_3: "Do tính khan hiếm và phóng xạ cao, Rutherfordium không có nhiều ứng dụng thực tiễn",
  
  appli_Db_1: "Được sử dụng trong nghiên cứu hạt nhân",
  appli_Db_2: "Được sử dụng trong nghiên cứu vật liệu",
  appli_Db_3: "Do tính khan hiếm và phóng xạ cao, Dubnium không có nhiều ứng dụng thực tiễn",
  
  appli_Sg_1: "Được sử dụng trong nghiên cứu hạt nhân",
  appli_Sg_2: "Được sử dụng trong nghiên cứu vật liệu",
  appli_Sg_3: "Do tính khan hiếm và phóng xạ cao, Seaborgium không có nhiều ứng dụng thực tiễn",
  
  appli_Bh_1: "Được sử dụng trong nghiên cứu hạt nhân",
  appli_Bh_2: "Được sử dụng trong nghiên cứu vật liệu",
  appli_Bh_3: "Do tính khan hiếm và phóng xạ cao, Bohrium không có nhiều ứng dụng thực tiễn",
  
  appli_Hs_1: "Được sử dụng trong nghiên cứu hạt nhân",
  appli_Hs_2: "Được sử dụng trong nghiên cứu vật liệu",
  appli_Hs_3: "Do tính khan hiếm và phóng xạ cao, Hassium không có nhiều ứng dụng thực tiễn",
  
  appli_Mt_1: "Được sử dụng trong nghiên cứu hạt nhân",
  appli_Mt_2: "Được sử dụng trong nghiên cứu vật liệu",
  appli_Mt_3: "Do tính khan hiếm và phóng xạ cao, Meitnerium không có nhiều ứng dụng thực tiễn",
  
  appli_Ds_1: "Được sử dụng trong nghiên cứu hạt nhân",
  appli_Ds_2: "Được sử dụng trong nghiên cứu vật liệu",
  appli_Ds_3: "Do tính khan hiếm và phóng xạ cao, Darmstadtium không có nhiều ứng dụng thực tiễn",
  
  appli_Rg_1: "Được sử dụng trong nghiên cứu hạt nhân",
  appli_Rg_2: "Được sử dụng trong nghiên cứu vật liệu",
  appli_Rg_3: "Do tính khan hiếm và phóng xạ cao, Roentgenium không có nhiều ứng dụng thực tiễn",
  
  appli_Cn_1: "Được sử dụng trong nghiên cứu hạt nhân",
  appli_Cn_2: "Được sử dụng trong nghiên cứu vật liệu",
  appli_Cn_3: "Do tính khan hiếm và phóng xạ cao, Copernicium không có nhiều ứng dụng thực tiễn",
  
  appli_Nh_1: "Được sử dụng trong nghiên cứu hạt nhân",
  appli_Nh_2: "Được sử dụng trong nghiên cứu vật liệu",
  appli_Nh_3: "Do tính khan hiếm và phóng xạ cao, Nihonium không có nhiều ứng dụng thực tiễn",
  
  appli_Fl_1: "Được sử dụng trong nghiên cứu hạt nhân",
  appli_Fl_2: "Được sử dụng trong nghiên cứu vật liệu",
  appli_Fl_3: "Do tính khan hiếm và phóng xạ cao, Flevorium không có nhiều ứng dụng thực tiễn",
  
  appli_Mc_1: "Đóng góp sự hiểu biết về cấu trúc nguyên tử",
  appli_Mc_2: "Tiến xa hơn trong lĩnh vực vật lý hạt nhân",
  appli_Mc_3: "Do tính khan hiếm và phóng xạ cao, Moscovium không có nhiều ứng dụng thực tiễn",

  appli_Lv_1: "Tham gia vào các phản ứng truyền nhân với các hạt nhân khác",
  appli_Lv_2: "Dự đoán và hiểu các quá trình liên quan đến hạt nhân",
  appli_Lv_3: "Do tính khan hiếm và phóng xạ cao, Livermorium không có nhiều ứng dụng thực tiễn",
  
  appli_Ts_1: "Tennessine có thể được sử dụng trong nghiên cứu về vật lý hạt nhân",
  appli_Ts_2: "Tennessine giúp nghiên cứu hóa học vô cơ",
  appli_Ts_3: "Do tính khan hiếm và phóng xạ cao, Tennessine không có nhiều ứng dụng thực tiễn",
  
  appli_Og_1: "Được sử dụng trong nghiên cứu hạt nhân",
  appli_Og_2: "Sử dụng để nghiên cứu về cấu trúc nguyên tử nặng",
  appli_Og_3: "Do tính khan hiếm và phóng xạ cao, Oganesson không có nhiều ứng dụng thực tiễn",
  }
  };
  
const elementsDefaultTranslation = {
  "en": {
    //default
    "group": "Group",
    "period": "Period",
    "prop": "Properties",
    "structure3": "Structure",
    "history3": "History",
    "appli3": "Applications",
    //properties
    "atomicMass": "Atomic mass",
    "atomicNumber": "Atomic number",
    "stateAtRoomTemperature": "State at room temperature",
    "meltingPoint": "Melting point",
    "boilingPoint": "Boiling point",
    "valenceNumber": "Valence number",
    "oxidationState": "Oxidation state",
    "density": "Density",
    //structure
    "protonNumber": "Number of protons",
    "neutronNumber": "Number of neutrons",
    "electronNumber": "Number of electrons",
    "electronConfig": "Electron configuration",
    //history
    "year": "Discovery year",
    "discoverer": "Discoverer",
    //for details
    "read": "Read more"
  }, 
  "vn": {
    //default
    "group": "Nhóm",
    "period": "Chu kỳ",
    "prop": "Tính chất",
    "structure3": "Cấu tạo nguyên tử",
    "history3": "Lịch sử",
    "appli3": "Ứng dụng",
    //properties
    "atomicMass": "Số khối",
    "atomicNumber": "Số hiệu nguyên tử",
    "stateAtRoomTemperature": "Trạng thái",
    "meltingPoint": "Điểm nóng chảy",
    "boilingPoint": "Điểm sôi",
    "valenceNumber": "Hóa trị",
    "oxidationState": "Mức ôxy hóa",
    "density": "Khối lượng riêng",
    //strucutre
    "protonNumber": "Số hạt proton",
    "neutronNumber": "Số hạt neutron",
    "electronNumber": "Số hạt electron",
    "electronConfig": "Cấu hình electron",
    //history
    "year": "Năm phát hiện",
    "discoverer": "Người phát hiện",
    //for details"
    "read": "Xem thêm"
  }
};
const indexTranslation = {
  en: {
    //nav bar
    brand: "Periodic table",
    home: "Home",
    details: "Element details",
    history: "History",
    contact: "About us",
    mode: "Switch mode",
    lang: "Switch language",
    //periodic table
    title: "PERIODIC TABLE",
    hisTitle: "History of the periodic table",
    search: "Search element",
    H: "Hydrogen",
    He: "Helium",
    Li: "Lithium",
    Be: "Beryllium",
    B: "Boron",
    C: "Carbon",
    N: "Nitrogen",
    O: "Oxygen",
    F: "Fluorine",
    Ne: "Neon",
    Na: "Sodium",
    Mg: "Magnesium",
    Al: "Aluminium",
    Si: "Silicon",
    P: "Phosphorus",
    S: "Sulfur",
    Cl: "Chlorine",
    Ar: "Argon",
    K: "Potassium",
    Ca: "Calcium",
    Sc: "Scandium",
    Ti: "Titanium",
    V: "Vanadium",
    Cr: "Chromium",
    Mn: "Manganese",
    Fe: "Iron",
    Co: "Cobalt",
    Ni: "Nickel",
    Cu: "Copper",
    Zn: "Zinc",
    Ga: "Gallium",
    Ge: "Germanium",
    As: "Arsenic",
    Se: "Selenium",
    Br: "Bromine",
    Kr: "Krypton",
    Rb: "Rubidium",
    Sr: "Strontium",
    Y: "Yttrium",
    Zr: "Zirconium",
    Nb: "Niobium",
    Mo: "Molybdenum",
    Tc: "Technetium",
    Ru: "Ruthenium",
    Rh: "Rhodium",
    Pd: "Palladium",
    Ag: "Silver",
    Cd: "Cadmium",
    In: "Indium",
    Sn: "Tin",
    Sb: "Antimony",
    Te: "Tellurium",
    I: "Iodine",
    Xe: "Xenon",
    Cs: "Caesium",
    Ba: "Barium",
    La: "Lanthanum",
    Ce: "Cerium",
    Pr: "Praseodymium",
    Nd: "Neodymium",
    Pm: "Promethium",
    Sm: "Samarium",
    Eu: "Europium",
    Gd: "Gadolinium",
    Tb: "Terbium",
    Dy: "Dysprosium",
    Ho: "Holmium",
    Er: "Erbium",
    Tm: "Thulium",
    Yb: "Ytterbium",
    Lu: "Lutetium",
    Hf: "Hafnium",
    Ta: "Tantalum",
    W: "Tungsten",
    Re: "Rhenium",
    Os: "Osmium",
    Ir: "Iridium",
    Pt: "Platinum",
    Au: "Gold",
    Hg: "Mercury",
    Tl: "Thallium",
    Pb: "Lead",
    Bi: "Bismuth",
    Po: "Polonium",
    At: "Astatine",
    Rn: "Radon",
    Fr: "Francium",
    Ra: "Radium",
    Ac: "Actinium",
    Th: "Thorium",
    Pa: "Protactinium",
    U: "Uranium",
    Np: "Neptunium",
    Pu: "Plutonium",
    Am: "Americium",
    Cm: "Curium",
    Bk: "Berkelium",
    Cf: "Californium",
    Es: "Einsteinium",
    Fm: "Fermium",
    Md: "Mendelevium",
    No: "Nobelium",
    Lr: "Lawrencium",
    Rf: "Rutherfordium",
    Db: "Dubnium",
    Sg: "Seaborgium",
    Bh: "Bohrium",
    Hs: "Hassium",
    Mt: "Meitnerium",
    Ds: "Darmstadtium",
    Rg: "Roentgenium",
    Cn: "Copernicium",
    Nh: "Nihonium",
    Fl: "Flerovium",
    Mc: "Moscovium",
    Lv: "Livermorium",
    Ts: "Tennessine",
    Og: "Oganesson",
    lantan: "Lanthanides",
    actini: "Actinides",
    // element type
    radio: "Radioactive element",
    nonmetal: "Non-metal",
    alkalimetal: "Alkali metal",
    alkalineearthmetal: "Alkaline earth metal",
    metalloid: "Metalloid",
    halogen: "Halogen",
    noble: "Noble gas",
    post: "Post-Transition metal",
    transition: "Transition metal",
    undef: "Unknown chemical properties",
    lantan1: "Lanthanides",
    actini1: "Actinides",
    //footer
    intro: "This is our school project",
    school: "school",
    face: "Our team's leader's facebook",
    mail: "Our team's leader's gmail",
    rick: "Thank you for using our website!",
  },
  vn: {
    //nav bar
    brand: "Bảng tuần hoàn hóa học",
    home: "Trang chủ",
    details: "Thông tin nguyên tố",
    history: "Lịch sử",
    contact: "Về chúng tôi",
    mode: "Đổi giao diện",
    lang: "Đổi ngôn ngữ",
    //periodic table
    title: "Bảng tuần hoàn hóa học",
    hisTitle: "Lịch sử của bằng tuần hoàn hóa học",
    search: "Tìm kiếm nguyên tố",
    H: "Hidro",
    He: "Heli",
    Li: "Liti",
    Be: "Beri",
    B: "Bo",
    C: "Cacbon",
    N: "Nitơ",
    O: "Oxi",
    F: "Flo",
    Ne: "Neon",
    Na: "Natri",
    Mg: "Magie",
    Al: "Nhôm",
    Si: "Silic",
    P: "Photpho",
    S: "Lưu huỳnh",
    Cl: "Clo",
    Ar: "Agon",
    K: "Kali",
    Ca: "Canxi",
    Sc: "Scandi",
    Ti: "Titan",
    V: "Vanadi",
    Cr: "Crom",
    Mn: "Mangan",
    Fe: "Sắt",
    Co: "Coban",
    Ni: "Niken",
    Cu: "Đồng",
    Zn: "Kẽm",
    Ga: "Gali",
    Ge: "Gecmani",
    As: "Asen",
    Se: "Selen",
    Br: "Brom",
    Kr: "Kripton",
    Rb: "Rubidi",
    Sr: "Stronti",
    Y: "Ytri",
    Zr: "Ziriconi",
    Nb: "Niobi",
    Mo: "Molipđen",
    Tc: "Tecnexi",
    Ru: "Ruteni",
    Rh: "Rođi",
    Pd: "Palađi",
    Ag: "Bạc",
    Cd: "Cadimi",
    In: "Inđi",
    Sn: "Thiếc",
    Sb: "Antimon",
    Te: "Telu",
    I: "Iot",
    Xe: "Xenon",
    Cs: "Xesi",
    Ba: "Bari",
    La: "Lantan",
    Ce: "Xeri",
    Pr: "Prazeodim",
    Nd: "Neoưđim",
    Pm: "Prometi",
    Sm: "Samari",
    Eu: "Europi",
    Gd: "Gađoleni",
    Tb: "Tebi",
    Dy: "Điprozi",
    Ho: "Honmi",
    Er: "Eribi",
    Tm: "Tuli",
    Yb: "Ytecbi",
    Lu: "Lutexi",
    Hf: "Hafini",
    Ta: "Tantan",
    W: "Vonfram",
    Re: "Reni",
    Os: "Osimu",
    Ir: "Iriđi",
    Pt: "Platin",
    Au: "Vàng",
    Hg: "Thủy ngân",
    Tl: "Tali",
    Pb: "Chì",
    Bi: "Bitmut",
    Po: "Poloni",
    At: "Atatin",
    Rn: "Rađon",
    Fr: "Franxi",
    Ra: "Rađi",
    Ac: "Actini",
    Th: "Thori",
    Pa: "Protactini",
    U: "Urani",
    Np: "Neptuni",
    Pu: "Plutoni",
    Am: "Amerixi",
    Cm: "Curi",
    Bk: "Beckeli",
    Cf: "Califoni",
    Es: "Ensteni",
    Fm: "Fecmi",
    Md: "Menđelevi",
    No: "Nobeli",
    Lr: "Lorenxi",
    Rf: "Rudơfo",
    Db: "Dubni",
    Sg: "Sibogi",
    Bh: "Bori",
    Hs: "Hassi",
    Mt: "Meitneri",
    Ds: "Darmstati",
    Rg: "Rogheni",
    Cn: "Copernici",
    Nh: "Nihoni",
    Fl: "Flerovi",
    Mc: "Moscovi",
    Lv: "Livermori",
    Ts: "Tennessine",
    Og: "Oganesson",
    lantan: "Họ LANTAN",
    actini: "Họ ACTINI",
    // loại nguyên tố
    radio: "Nguyên tố phóng xạ",
    nonmetal: "Phi kim",
    alkalimetal: "Kim loại kiềm",
    alkalineearthmetal: "Kim loại kiềm thổ",
    metalloid: "Á kim",
    halogen: "Halogen",
    noble: "Khí hiếm",
    post: "Kim loại hậu chuyển tiếp",
    transition: "Kim loại chuyển tiếp",
    undef: "Đặc tính không xác định",
    lantan1: "Họ LANTAN",
    actini1: "Họ ACTINI",
    //footer
    intro: "Đây là dự án của trường",
    school: "Vinschool",
    face: "Facebook của nhóm trưởng",
    mail: "Email của nhóm trưởng",
    rick: "Cảm ơn đã sử dụng trang web của chúng tôi",
  },
};
function chooosing() {
  if (localStorage.getItem("lang")) {
    reset();
  } else {
    localStorage.setItem("lang", "en");
    reset();
  }
}
window.onload = chooosing();
function indexTranslate(item) {
  if (item != "search") {
    if (item.length > 2) {
      var ele = document.getElementById(item);
      if (ele) {
        ele.textContent = indexTranslation[localStorage.getItem("lang")][item];
      }
    } else if (item.length <= 2 && (item != "actini" || item != "lantan")) {
      var ele = document.getElementById(item);
      if (ele) {
        var ele2 = document
          .getElementById(item)
          .getElementsByClassName("name")[0];
        if (ele2) {
          ele2.textContent =
            indexTranslation[localStorage.getItem("lang")][item];
        }
      }
    } else if (item == "actini" || item == "lantan") {
      var ele = document.getElementById(item);
      if (ele) {
        ele.innerHTML = indexTranslation[localStorage.getItem("lang")][item];
      }
    }
  } else {
    var ele = document.getElementById(item);
    if (ele) {
      ele.setAttribute(
        "placeholder",
        indexTranslation[localStorage.getItem("lang")][item]
      );
    } else {
      var ele2 = document.getElementById("elementSearch");
      ele2.setAttribute(
        "placeholder",
        indexTranslation[localStorage.getItem("lang")][item]
      );
    }
  }
}
function historyTranslate(item) {
  var ele = document.getElementById(item);
  if (ele) {
    ele.textContent = historyTranslation[localStorage.getItem("lang")][item];
  }
}
function contactTranslate(item) {
  var ele = document.getElementById(item);
  if (ele) {
    ele.innerHTML = contactTranslation[localStorage.getItem("lang")][item];
  }
}
function language() {
  if (localStorage.getItem("lang") == "en") {
    localStorage.setItem("lang", "vn");
    document.body.setAttribute("lang", "vn");
  } else {
    localStorage.setItem("lang", "en");
    document.body.setAttribute("lang", "en");
  }
  reset();
}
function sidebarTranslate(item) {
  var ele = document.getElementById(item);
  if (ele) {
    ele.textContent = sidebarTranslation[localStorage.getItem("lang")][item];
  }
}
function eleNameTranslate(e) {
  let x = document.getElementById(e);
  x.innerHTML = indexTranslation[localStorage.getItem("lang")][e];
}
function elementTranslate(e) {
  let x = document.getElementById(e);
  if (x) {
    x.innerHTML = elementsDefaultTranslation[localStorage.getItem("lang")][e];
  }
}
function elementsTranslate(e) {
  let arr = document.getElementsByClassName(e);
  if (arr != null) {
    for (let i = 0; i < arr.length; i++) {
    arr[i].innerHTML = elementsDefaultTranslation[localStorage.getItem("lang")][e];
  }
  }
}

function getApplication(e) {
  let x = document.getElementById(e);
  if (x) {
    x.innerHTML = appliTranslation[localStorage.getItem("lang")][e];
  }
}
function reset() {
  // nav bar
  nav_bar.forEach((element) => {
    const a = document.getElementById(element);
    if (a) {
      a.textContent = navbarTranslation[localStorage.getItem("lang")][element];
    }
  });
  //periodic table
  elelist1.forEach((element) => {
    const b = document.getElementById(element);
    if (b) {
      const a = document
        .getElementById(element)
        .getElementsByClassName("name")[0];
      if (a) {
        a.textContent = indexTranslation[localStorage.getItem("lang")][element];
      }
    }
  });
  //element's type
  elelist2.forEach((element) => {
    const a = document.getElementById(element);
    if (a) {
      a.textContent = indexTranslation[localStorage.getItem("lang")][element];
    }
  });

  const title = document.getElementById("title");
  if (title) {
    title.textContent = indexTranslation[localStorage.getItem("lang")]["title"];
  }
  const search = document.getElementById("search");
  if (search) {
    search.setAttribute(
      "placeholder",
      indexTranslation[localStorage.getItem("lang")]["search"]
    );
  }

  var ele2 = document.getElementById("elementSearch");
  if (ele2) {
    ele2.setAttribute(
        "placeholder",
        indexTranslation[localStorage.getItem("lang")]["search"]
  );
  }
      
  
  //footer
  footer.forEach((element) => {
    indexTranslate(element);
  });

  //events
  events.forEach((element) => {
    historyTranslate(element);
  });

  //contact
  contact.forEach((element) => {
    contactTranslate(element);
  });
  
  //side bar 
  sidebar.forEach((element) => {
    sidebarTranslate(element);
  });

  //element
  element.forEach((element) => {
    elementTranslate(element);
    elementsTranslate(element);
  });
  
  application.forEach((ele) => {
    getApplication(ele);
  })
}
