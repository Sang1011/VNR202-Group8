import { Building2, FileText, Flag, Globe, Rocket, TrendingUp } from "lucide-react";

export const timelineData = [
  {
    id: 1,
    year: "1996 - 2000",
    title: "Đại hội VIII (1996)",
    color: "bg-cyan-500",
    borderColor: "border-cyan-500",
    textColor: "text-cyan-600",
    icon: Flag,
    image: './back8.jpg',
    summary: "Đẩy mạnh công nghiệp hóa – hiện đại hóa, thừa nhận kinh tế nhiều thành phần",
    content: {
      image: "./daihoi8.png",
      background: {
        domestic: [
          "Đã thoát khỏi khủng hoảng kinh tế – xã hội, đạt thành tựu quan trọng.",
          "Kinh tế: Ổn định và tăng trưởng, phát triển đa dạng thành phần kinh tế, mở cửa hội nhập quốc tế.",
          "Xã hội: Cải thiện đời sống nhân dân, ổn định chính trị - xã hội",
        ],
        international: [
          "Sự phát triển mạnh mẽ của Cách mạng khoa học – công nghệ (đặc biệt là công nghệ thông tin) tạo ra cơ hội và thách thức lớn.",
          "CNXH hiện thực thoái trào (Liên Xô và Đông Âu tan rã) → đòi hỏi Đảng phải kiên định con đường và đẩy mạnh đổi mới.",
        ],
      },
      oldPolicies: [
        "Bao cấp trực tiếp cho doanh nghiệp",
        "Quản lý kinh tế bằng mệnh lệnh hành chính",
        "Coi kinh tế nhà nước là gần như duy nhất",
      ],
      newPolicies: [
        "Đẩy mạnh công nghiệp hóa – hiện đại hóa",
        "Thừa nhận kinh tế nhiều thành phần",
        "Mở cửa thu hút đầu tư nước ngoài",
      ],
      targetsAndMissions: [
        "Mục tiêu: Đưa nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại vào năm 2020.",
        "Tiếp tục sự nghiệp Đổi mới, phát triển kinh tế nhanh, hiệu quả, bền vững.",
        "Xây dựng Đảng và hệ thống chính trị vững mạnh."
      ],
      events: [
        "1995: Việt Nam chính thức gia nhập ASEAN – bước ngoặt hội nhập quốc tế.",
        "12/1996 (TW 2 khóa VIII): Ban hành Nghị quyết về GD-ĐT, KH-CN là quốc sách hàng đầu.",
        "6/1997 (TW 3 khóa VIII): Ban hành Nghị quyết về Xây dựng Nhà nước pháp quyền XHCN và cải cách hành chính – tư pháp.",
        "1997–1998: Khủng hoảng tài chính châu Á - Việt Nam bị ảnh hưởng nhẹ hơn.",
        "7/1998 (TW 5 khóa VIII): Ban hành Nghị quyết về Văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
        "12/1997 (TW 4 khóa VIII) & 2/1999 (TW 6 lần 2 khóa VIII): Điều chỉnh nhân sự cấp cao (Lê Khả Phiêu làm TBT), tập trung Chỉnh đốn Đảng, chống tham nhũng, quan liêu.",
        "8/1999 (TW 7 khóa VIII): Quyết định Sắp xếp tổ chức bộ máy, đổi mới phương thức hoạt động hệ thống chính trị.",
      ],
    },
    contentNext: {
      image: "./daihoi8.png", // Giữ lại ảnh nếu cần
      mainTheme: "Tiếp tục sự nghiệp đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa vì mục tiêu dân giàu, nước mạnh, xã hội công bằng, văn minh, vững bước đi lên CNXH.",
      keyContent: [
        "Đánh giá thành tựu to lớn của 10 năm đổi mới (1986-1996), chỉ ra những yếu kém.",
        "Mục tiêu & Nhiệm vụ: Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước theo định hướng XHCN.",
      ],
      majorLessons: [
        "Giữ vững mục tiêu độc lập dân tộc và CNXH.",
        "Kết hợp chặt chẽ đổi mới kinh tế với đổi mới chính trị.",
        "Xây dựng nền kinh tế hàng hóa nhiều thành phần.",
        "Mở rộng khối đại đoàn kết toàn dân và hợp tác quốc tế.",
        "Tăng cường vai trò lãnh đạo của Đảng.",
      ],
      // Trường mới chứa thông tin chi tiết sau Đại hội
      postCongressResolutions: {
        industrializationViews: [
          "Quan điểm: Độc lập tự chủ & Hợp tác quốc tế.",
          "Là sự nghiệp của toàn dân; lấy phát huy nguồn lực con người là yếu tố cơ bản.",
          "Khoa học và công nghệ là động lực then chốt; lấy hiệu quả kinh tế làm chuẩn cơ bản.",
        ],
        partyBuilding: [
          "Nội dung: Tự đổi mới, tự chỉnh đốn Đảng, giữ vững bản chất giai cấp công nhân.",
          "Mục tiêu: Nâng cao bản lĩnh chính trị, phẩm chất, năng lực của cán bộ, đảng viên.",
          "NQ 10-NQ/TW (TW6 lần 2 - 2/1999): Kiên quyết đấu tranh đẩy lùi 4 nguy cơ (tham nhũng, quan liêu; tụt hậu kinh tế; chệch hướng XHCN; 'diễn biến hòa bình').",
        ],
        stateAndSystemBuilding: {
          meeting: "Trung ương 3 khóa VIII (6/1997) với Nghị quyết 03-NQ/HNTW.",
          focus: [
            "Phát huy quyền làm chủ của nhân dân (dân chủ đại diện và trực tiếp).",
            "Xây dựng Nhà nước CHXHCN trong sạch, vững mạnh, hoạt động hiệu lực, hiệu quả.",
            "Nhiệm vụ: Mở rộng dân chủ, kiện toàn Quốc hội, đẩy mạnh cải cách hành chính và cải cách tư pháp; hoàn thiện Nhà nước pháp quyền XHCN.",
          ],
        },
        socialAndCulturalDevelopment: {
          educationAndScience: {
            meeting: "Trung ương 2 khóa VIII (12/1996) với Nghị quyết 02-NQ/HNTW.",
            focus: [
              "Giáo dục – đào tạo và khoa học – công nghệ là quốc sách hàng đầu.",
              "Xây dựng con người Việt Nam phát triển toàn diện, vừa “hồng” vừa “chuyên”.",
            ],
          },
          culture: {
            meeting: "Trung ương 5 khóa VIII (7/1998).",
            focus: [
              "Xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
              "Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu vừa là động lực của phát triển.",
              "10 nhiệm vụ lớn (Xây dựng con người, bảo tồn di sản, gắn với giáo dục, chống 'diễn biến hòa bình',...).",
            ],
          },
        },
      },
    }
  },
  {
    id: 2,
    year: "2001 - 2005",
    title: "Đại hội IX (2001)",
    color: "bg-amber-500",
    borderColor: "border-amber-500",
    textColor: "text-amber-600",
    icon: TrendingUp,
    summary: "Khẳng định Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, đẩy mạnh CNH, HĐH và hội nhập quốc tế.",
    image: './back9.webp',
    content: {
      image: "./daihoi9.png",
      background: {
        domestic: [
          "Sau 15 năm Đổi mới (1986–2001), Việt Nam đạt nhiều thành tựu, tạo thế và lực mới.",
          "Kinh tế phát triển chưa vững chắc, hiệu quả và sức cạnh tranh còn thấp.",
          "Các nguy cơ (tụt hậu, chệch hướng, tham nhũng, quan liêu, 'diễn biến hòa bình') vẫn tồn tại gay gắt.",
          "Mục tiêu tăng trưởng GDP 1996–2000 (9–10%) không đạt.",
        ],
        international: [
          "Cách mạng KH-CN, kinh tế tri thức và toàn cầu hóa phát triển mạnh mẽ.",
          "Hòa bình, hợp tác là xu thế chủ đạo; xung đột cục bộ, khủng bố (sau 11/9/2001) vẫn phức tạp.",
          "CNXH hiện thực thoái trào, đòi hỏi Việt Nam kiên định mục tiêu và đẩy mạnh đổi mới.",
        ],
      },
      oldPolicies: [
        'Nhận thức về đổi mới chưa thật đầy đủ và đồng bộ',
        'Cơ chế, chính sách kinh tế chưa theo kịp yêu cầu phát triển và hội nhập',
        'Môi trường phát triển các thành phần kinh tế chưa thật thông thoáng, bình đẳng',
      ],
      newPolicies: [
        "Khẳng định Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam cho hành động.",
        "Xác định mô hình: Kinh tế thị trường định hướng xã hội chủ nghĩa.",
        "Chủ động hội nhập kinh tế quốc tế.",
      ],
      targetsAndMissions: [
        "Chiến lược 2001–2010: Đưa Việt Nam ra khỏi tình trạng kém phát triển.",
        "Tạo nền tảng để đến năm 2020 cơ bản trở thành nước công nghiệp.",
        "Mục tiêu cụ thể: GDP năm 2010 gấp đôi năm 2000.",
      ],
      events: [
        "4/2001: Đại hội Đảng lần thứ IX (Đồng chí Nông Đức Mạnh được bầu làm Tổng Bí thư).",
        "12/2001 (NQ 05-NQ/TW): Đổi mới, sắp xếp, nâng cao hiệu quả Doanh nghiệp Nhà nước.",
        "3/2003 (Chỉ thị 23-CT/TW): Đẩy mạnh nghiên cứu, tuyên truyền, giáo dục Tư tưởng Hồ Chí Minh.",
        "3/2003 (NQ 24, 25-NQ/TW): Về công tác dân tộc và tôn giáo (Chiến lược lâu dài, tôn trọng tự do tín ngưỡng).",
        "3/2004 (NQ 36-NQ/TW): Khẳng định Người Việt Nam ở nước ngoài là bộ phận không tách rời của cộng đồng dân tộc.",
      ],
    },
    contentNext: {
      mainTheme: "Tiếp tục thực hiện công nghiệp hóa, hiện đại hóa đất nước.",
      keyContent: [
        "Khẳng định Chủ nghĩa Mác – Lênin và Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam cho hành động.",
        "Mô hình kinh tế: Kinh tế thị trường định hướng xã hội chủ nghĩa.",
        "Nâng tầm đối ngoại: Từ 'muốn là bạn' lên 'là đối tác tin cậy' của cộng đồng quốc tế.",
      ],
      ideologicalFoundation: {
        hoChiMinhThought: [
          "Lần đầu xác định rõ nội dung cơ bản của Tư tưởng Hồ Chí Minh.",
          "Là sự vận dụng và phát triển sáng tạo chủ nghĩa Mác – Lênin vào điều kiện Việt Nam.",
          "Khẳng định chủ nghĩa Mác – Lênin và Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng."
        ],
        economicModel: [
          "Mô hình: Kinh tế thị trường định hướng xã hội chủ nghĩa.",
          "Nền kinh tế nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước.",
          "Gắn với con đường quá độ lên Chủ nghĩa Xã hội (CNXH), bỏ qua chế độ tư bản chủ nghĩa (TBCN) nhưng tiếp thu thành tựu khoa học – công nghệ."
        ],
      },
      economicOrientation: {
        title: "Định hướng phát triển toàn diện",
        content: [
          "Kinh tế: Kiên trì, lâu dài phát triển kinh tế thị trường định hướng xã hội chủ nghĩa; thực hiện cơ chế đa sở hữu, đa thành phần; phân phối chủ yếu theo lao động và hiệu quả, đồng thời theo đóng góp vốn, nguồn lực và phúc lợi xã hội.",
          "Xã hội – giai cấp: Tăng cường đoàn kết, hợp tác trong nhân dân; nội dung trọng tâm của đấu tranh là thực hiện công nghiệp hóa – hiện đại hóa, bảo đảm công bằng xã hội, phòng chống tiêu cực và làm thất bại các âm mưu chống phá.",
          "Văn hóa: Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc; phát triển con người Việt Nam toàn diện.",
          "Đối ngoại: Thực hiện đường lối đối ngoại độc lập, tự chủ; đa phương hóa, đa dạng hóa quan hệ; chủ động hội nhập kinh tế quốc tế; Việt Nam là bạn, là đối tác tin cậy của cộng đồng quốc tế."
        ]
      },      
      socialAndCulturalDevelopment: {
        // 1. Văn hóa & Con người (từ Định hướng phát triển toàn diện)
        cultureAndPeople: [
          "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc; phát triển con người Việt Nam toàn diện (trí tuệ, đạo đức, sáng tạo).",
          "Văn hóa được xác định là nền tảng tinh thần, mục tiêu và động lực của phát triển, gắn với kinh tế thị trường định hướng XHCN."
        ],
        // 2. Xã hội – Giai cấp & Đoàn kết (từ Định hướng phát triển toàn diện & nationalUnity cũ)
        nationalUnity: [
          "Đại đoàn kết toàn dân là động lực chủ yếu, mục tiêu: dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh.",
          "Quan hệ Xã hội – Giai cấp: đoàn kết, hợp tác trong nhân dân. Nội dung trọng tâm của 'đấu tranh' là thực hiện CNH–HĐH, công bằng xã hội, chống tiêu cực, làm thất bại âm mưu chống phá."
        ],
        // 3. Công tác Dân tộc, Tôn giáo, NVNONN (Giữ nguyên các NQ đặc thù)
        specificGroups: [
          "Dân tộc: Chiến lược lâu dài, các dân tộc bình đẳng, đoàn kết, cùng phát triển (NQ 24-NQ/TW).",
          "Tôn giáo: Tôn trọng quyền tự do tín ngưỡng, nghiêm cấm lợi dụng tôn giáo (NQ 25-NQ/TW).",
          "Người Việt Nam ở nước ngoài: Là bộ phận không tách rời, nguồn lực quan trọng (NQ 36-NQ/TW)."
        ]
      },
      // Bổ sung mục chi tiết về Chiến lược Bảo vệ Tổ quốc
      nationalDefenseStrategy: {
        aims: [
          "Bảo vệ độc lập, chủ quyền, toàn vẹn lãnh thổ.",
          "Bảo vệ Đảng, Nhà nước, nhân dân và chế độ XHCN, bảo vệ sự nghiệp đổi mới.",
          "Giữ vững an ninh, trật tự và môi trường hòa bình để phát triển.",
        ],
        directingViews: [
          "Đảng giữ vai trò lãnh đạo tuyệt đối.",
          "Kiên định độc lập dân tộc gắn với CNXH.",
          "Kết hợp chặt chẽ xây dựng và bảo vệ Tổ quốc.",
          "Xây dựng sức mạnh tổng hợp, chủ động phòng ngừa, ngăn chặn nguy cơ từ sớm.",
        ],
        basicTasks: [
          "Giữ vững hòa bình, ổn định để phát triển đất nước.",
          "Xây dựng và bảo vệ Đảng là nhiệm vụ then chốt.",
          "Tăng cường quốc phòng – an ninh, quân đội & công an nòng cốt.",
          "Đẩy mạnh đối ngoại, hợp tác quốc tế.",
        ]
      },
      postCongressResolutions: {
        economyAndLand: [
          "NQ 05-NQ/TW (9/2001): Sắp xếp, đổi mới, nâng cao hiệu quả Doanh nghiệp Nhà nước.",
          "TW 5 (3/2002): Khẳng định kinh tế tư nhân là bộ phận quan trọng.",
          "Đất đai: Thuộc sở hữu toàn dân, Nhà nước quản lý thống nhất.",
        ],
        partyBuilding: [
          "Chỉ thị 23-CT/TW (3/2003): Đẩy mạnh nghiên cứu, tuyên truyền, giáo dục Tư tưởng Hồ Chí Minh.",
          "Cán bộ: Xây dựng đội ngũ yêu nước, liêm chính, có năng lực.",
        ],
      },
    },
  },
  {
    id: 3,
    year: "2006 - 2010",
    title: "Đại hội X (2006)",
    color: "bg-rose-500",
    borderColor: "border-rose-500",
    textColor: "text-rose-600",
    icon: Globe,
    summary: "Đẩy mạnh toàn diện công cuộc đổi mới, chú trọng xây dựng Đảng, hội nhập kinh tế quốc tế và gia nhập WTO (2007).",
    image: './back10.webp',
    content: {
      image: "./daihoi10.png",
      // Bối cảnh (Background): Phân tích Chính sách cũ
      background: {
        domestic: [
          "Nền kinh tế chưa thoát khỏi tình trạng kém phát triển, nguy cơ tụt hậu xa hơn vẫn lớn.",
          "Tốc độ phát triển chưa tương xứng với tiềm năng.",
          "Suy thoái tư tưởng chính trị, đạo đức, lối sống trong một bộ phận cán bộ, đảng viên; tham nhũng, lãng phí diễn biến phức tạp."
        ],
        international: [
          "Thế giới đầu thế kỷ XXI biến đổi nhanh, phức tạp và khó lường.",
          "Toàn cầu hóa kinh tế diễn ra mạnh mẽ.",
          "Khoa học – công nghệ có những bước đột phá lớn, đặc biệt là công nghệ thông tin, kinh tế tri thức.",
          "Cạnh tranh kinh tế – thương mại giữa các quốc gia ngày càng gay gắt."
        ],
      },
      // Hạn chế của Chính sách cũ
      oldPolicies: [
        "Trong lĩnh vực kinh tế: Nguồn lực xã hội chưa được huy động đầy đủ; Khó chuẩn bị đầy đủ để gia nhập WTO.",
        "Trong công tác xây dựng Đảng: Công tác xây dựng, chỉnh đốn Đảng chưa theo kịp yêu cầu mới."
      ],
      // Chính sách mới
      newPolicies: [
        "Xây dựng và chỉnh đốn Đảng là nhiệm vụ then chốt hàng đầu.",
        "Cho phép đảng viên làm kinh tế tư nhân.",
        "Phát huy sức mạnh đại đoàn kết toàn dân tộc.",
        "Đẩy mạnh đổi mới toàn diện."
      ],
      // Mục tiêu & Nhiệm vụ
      targetsAndMissions: [
        "Huy động và sử dụng hiệu quả mọi nguồn lực cho CNH–HĐH.",
        "Phát triển văn hóa, thực hiện tiến bộ và công bằng xã hội.",
        "Tăng cường quốc phòng – an ninh, mở rộng đối ngoại.",
        "Chủ động, tích cực hội nhập kinh tế quốc tế.",
        "Tạo nền tảng để đến năm 2020 Việt Nam cơ bản trở thành nước công nghiệp theo hướng hiện đại."
      ],
      // Sự kiện nổi bật
      events: [
        "Gia nhập WTO (2006).",
        "Hội nghị Trung ương 5 khóa X (7/2007) ban hành Nghị quyết về công tác tư tưởng, lý luận và báo chí.",
        "Giai đoạn 2006–2010 mở rộng quan hệ đối ngoại, giữ vững ổn định chính trị."
      ],
    },
  },
  {
    id: 4,
    year: "2011 - 2015",
    title: "Đại hội XI (2011)",
    color: "bg-slate-700",
    borderColor: "border-slate-700",
    textColor: "text-slate-700",
    icon: Building2,
    summary: "Đề ra Cương lĩnh 2011 và Chiến lược 2011-2020. Mục tiêu: Cơ bản trở thành nước công nghiệp theo hướng hiện đại vào năm 2020.",
    image: './back11.webp',
    content: {
      image: "./daihoi11.png",
      // Bối cảnh lịch sử
      background: {
        domestic: [
          "Sau 25 năm đổi mới, đất nước đạt thành tựu to lớn và toàn diện, ra khỏi tình trạng kém phát triển, vượt ngưỡng nước thu nhập thấp.",
          "Kinh tế – xã hội có nhiều chuyển biến tích cực, nhưng vẫn chịu tác động tiêu cực của khủng hoảng tài chính và suy thoái kinh tế toàn cầu.",
          "Công tác xây dựng Đảng còn nhiều hạn chế, chậm được khắc phục."
        ],
        international: [
          "Hòa bình, hợp tác và phát triển là xu thế lớn, nhưng xung đột sắc tộc, tôn giáo, tranh chấp tài nguyên, khủng bố và tội phạm xuyên quốc gia gia tăng.",
          "Nhiều vấn đề toàn cầu như đói nghèo, dịch bệnh, biến đổi khí hậu đòi hỏi tăng cường phối hợp ứng phó.",
          "Quá trình toàn cầu hóa kinh tế tiếp tục phát triển mạnh mẽ, tạo cơ hội và thách thức phức tạp."
        ],
      },
      // Chính sách cũ (Thể hiện vấn đề cần khắc phục/những thành tựu chưa giải quyết triệt để)
      oldPolicies: [
        "Mô hình tăng trưởng chưa cân đối (giữa chiều rộng và chiều sâu).",
        "Chất lượng giáo dục – đào tạo, nguồn nhân lực chưa đáp ứng yêu cầu.",
        "Công tác xây dựng, chỉnh đốn Đảng còn nhiều hạn chế, chậm được khắc phục."
      ],
      // Chính sách mới / Nhiệm vụ chủ yếu
      newPolicies: [
        "Ổn định kinh tế vĩ mô; đổi mới mô hình tăng trưởng; cơ cấu lại nền kinh tế.",
        "Phát triển và nâng cao chất lượng giáo dục – đào tạo, nguồn nhân lực; đẩy mạnh phát triển khoa học, công nghệ.",
        "Nâng cao hiệu lực, hiệu quả hoạt động của Nhà nước pháp quyền XHCN; đẩy mạnh cải cách hành chính và cải cách tư pháp.",
        "Đẩy mạnh xây dựng, chỉnh đốn Đảng về chính trị, tư tưởng và tổ chức."
      ],
      // Chủ đề và Mục tiêu
      targetsAndMissions: [
        "Chủ đề: Tiếp tục nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi mới.",
        "Mục tiêu đến 2020: Phấn đấu cơ bản trở thành nước công nghiệp theo hướng hiện đại; chính trị – xã hội ổn định, dân chủ, kỷ cương; đời sống nhân dân được nâng cao rõ rệt."
      ],
      // Sự kiện/Kết quả nổi bật
      events: [
        "Đại hội đề ra Cương lĩnh 2011 và Chiến lược phát triển kinh tế – xã hội 2011–2020.",
        "Việt Nam ra khỏi tình trạng kém phát triển, vượt ngưỡng nước thu nhập thấp.",
        "Kinh tế vĩ mô cơ bản ổn định, duy trì tốc độ tăng trưởng khá."
      ],
    },
  },
  {
    id: 5,
    year: "2016 - 2020",
    title: "Đại hội XII (2016)",
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    textColor: "text-orange-600",
    icon: FileText,
    summary: "Đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới; tập trung chỉnh đốn Đảng, hoàn thiện thể chế và ứng phó với đại dịch Covid-19.",
    image: './back12.webp',
    content: {
      image: "./daihoi12.png",
      // Bối cảnh lịch sử
      background: {
        domestic: [
          "Việt Nam đã 30 năm Đổi mới (1986–2016), 'thế và lực tăng lên rõ rệt'.",
          "Nhiều vấn đề mới nảy sinh: chất lượng tăng trưởng chưa cao, nợ xấu – nợ công, cải cách bộ máy, tham nhũng.",
          "Cần định hướng phát triển bền vững hơn."
        ],
        international: [
          "Thế giới và khu vực diễn biến nhanh, phức tạp, khó lường.",
          "Cạnh tranh kinh tế, an ninh, tranh chấp ngày càng gay gắt.",
          "Tạo sức ép lớn lên ổn định và phát triển trong nước."
        ],
      },
      // Hạn chế của Chính sách cũ
      oldPolicies: [
        "Mô hình tăng trưởng chậm đổi mới, còn dựa vào vốn và lao động → năng suất, cạnh tranh chưa cao.",
        "Thể chế – pháp luật chồng chéo, thiếu ổn định, có lợi ích cục bộ.",
        "Doanh nghiệp nhà nước hiệu quả thấp, nợ nần, thất thoát lớn.",
        "Bộ máy tổ chức cồng kềnh, cán bộ thừa/thiếu, tham nhũng, lợi ích nhóm."
      ],
      // Chính sách mới / Nhiệm vụ trọng tâm Đại hội XII
      newPolicies: [
        "Xây dựng, chỉnh đốn Đảng, ngăn chặn suy thoái, 'tự diễn biến, tự chuyển hóa' (NQ 04-NQ/TW).",
        "Đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế (thực hiện 3 đột phá chiến lược).",
        "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN (NQ 05-NQ/TW).",
        "Chủ động hội nhập quốc tế nhưng giữ vững độc lập, tự chủ."
      ],
      // Mục tiêu & Nhiệm vụ
      targetsAndMissions: [
        "Mục tiêu: Đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới, phát triển nhanh và bền vững.",
        "Thực hiện 6 nhiệm vụ trọng tâm (Chỉnh đốn Đảng, Tinh gọn bộ máy, Cơ cấu lại kinh tế, Hội nhập, An sinh xã hội, Phát huy nhân tố con người)."
      ],
      // Sự kiện nổi bật & tác động
      events: [
        "10/2016 – NQ 04-NQ/TW (TW4): Siết kỷ luật, chống suy thoái, 'tự diễn biến, tự chuyển hóa'.",
        "2016–2018: Việt Nam tham gia các FTA thế hệ mới (CPTPP, EVFTA).",
        "10/2018 – NQ 36: Phát triển kinh tế biển gắn chủ quyền.",
        "2020: Đại dịch Covid-19 bùng phát, Việt Nam ứng phó thành công."
      ],
    },
  },
  {
    id: 6,
    year: "2021 - Nay",
    title: "Đại hội XIII (2021)",
    color: "bg-emerald-500",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-600",
    icon: Rocket,
    summary: "Xác định tầm nhìn chiến lược đến năm 2030 (thu nhập trung bình cao) và 2045 (nước phát triển, thu nhập cao); thúc đẩy chuyển đổi số và phát triển bền vững.",
    image: './back13.webp',
    content: {
      image: "./daihoi13.png",
      // Bối cảnh lịch sử
      background: {
        domestic: [
          "Thời cơ và thách thức đan xen sau 35 năm Đổi mới; nền tảng vững chắc, 'thế và lực tăng lên rõ rệt'.",
          "Nảy sinh các vấn đề chiến lược mới: phát triển bền vững, chuyển đổi số, nâng cao năng suất, an ninh phi truyền thống.",
          "Cần định hình tư duy phát triển dài hạn và tháo gỡ các điểm nghẽn về thể chế."
        ],
        international: [
          "Thế giới phức tạp, khó lường; hậu Covid-19, kinh tế thế giới phục hồi nhưng vẫn tiềm ẩn nhiều rủi ro.",
          "Biến đổi khí hậu và thiên tai trở thành vấn đề toàn cầu.",
          "Cách mạng công nghiệp 4.0 tác động mạnh mẽ, tạo áp lực cạnh tranh toàn cầu."
        ]
      },      
      oldPolicies: [
        "Một số chính sách từ Đại hội XII đã đạt kết quả nhưng chưa tháo gỡ triệt để các điểm nghẽn về thể chế.",
        "Năng lực quản trị quốc gia và nguồn nhân lực chưa đáp ứng yêu cầu phát triển dài hạn.",
        "Hạ tầng kinh tế – xã hội còn chưa đồng bộ, chưa phục vụ tốt chuyển đổi số.",
        "Tham nhũng, lãng phí, suy thoái trong nội bộ Đảng và hệ thống chính trị vẫn còn phức tạp, cần đấu tranh quyết liệt hơn."
      ],
      newPolicies: [
        "Đổi mới toàn diện, khơi dậy khát vọng phát triển đất nước.",
        "Xây dựng Đảng và hệ thống chính trị trong sạch, vững mạnh, hiệu lực, hiệu quả.",
        "Hội nhập quốc tế chủ động nhưng giữ vững độc lập, tự chủ.",
        "Đẩy mạnh chuyển đổi mô hình tăng trưởng dựa trên khoa học – công nghệ, đổi mới sáng tạo; phát triển kinh tế số, xã hội số.",
        "Đích đến: 2021–2025: phục hồi kinh tế, chuyển đổi số; 2030: kỷ niệm 100 năm thành lập Đảng; 2045: trở thành nước phát triển, thu nhập cao theo định hướng XHCN."
      ]
  ,      
      // Mục tiêu & Nhiệm vụ (Đích đến)
      targetsAndMissions: [
        "Mục tiêu 2030: Trở thành nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao.",
        "Mục tiêu 2045: Trở thành nước phát triển, thu nhập cao theo định hướng xã hội chủ nghĩa.",
        "Tiếp tục đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới, khơi dậy khát vọng phát triển."
      ],
      // Sự kiện nổi bật & tác động
      events: [
        "2021-2022: Ưu tiên kiểm soát Covid-19, phục hồi kinh tế hậu đại dịch.",
        "2021-2025: Triển khai 3 đột phá chiến lược: hoàn thiện thể chế, phát triển nguồn nhân lực chất lượng cao, xây dựng hạ tầng đồng bộ.",
        "Tiếp tục hội nhập quốc tế sâu rộng, mở cơ hội phát triển, tăng cạnh tranh và nâng cao năng lực nội sinh.",
        "2021-2025: Đẩy mạnh chống tham nhũng, tiêu cực, củng cố niềm tin xã hội.",
        "2021-2025: Đối mặt các rủi ro toàn cầu: chiến tranh thương mại Mỹ–Trung, căng thẳng chính trị, biến đổi khí hậu, giá năng lượng tăng, tác động đến xuất khẩu và FDI.",
        "02/09/2025: Diễu binh kỷ niệm 80 năm Quốc khánh, khẳng định tinh thần đoàn kết và chủ quyền."
      ]
    },
  }
]