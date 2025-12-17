"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Flag, TrendingUp, Globe, Building2, FileText, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import { XCircle, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
const timelineData = [
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
        "title": "Định hướng phát triển toàn diện",
        "content": [
          "Kiên trì, lâu dài phát triển kinh tế thị trường định hướng XHCN.",
          "Thực hiện cơ chế đa sở hữu, đa thành phần.",
          "Phân phối chủ yếu theo lao động và hiệu quả, đồng thời theo đóng góp vốn/nguồn lực và phúc lợi xã hội."
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

export function Timeline() {
  const [selectedItem, setSelectedItem] = useState<typeof timelineData[number] | null>(null)
  const [showDetailedContent, setShowDetailedContent] = useState(false);
  return (
    <div className="relative mx-auto max-w-7xl px-4">
      {/* Start Label */}
      <div className="mb-8 flex justify-center">
        <div className="rounded-lg border-2 border-primary bg-background px-6 py-2 font-bold text-primary shadow-md">
          BẮT ĐẦU
        </div>
      </div>

      {/* Timeline Line */}
      <div className="absolute left-1/2 top-20 bottom-20 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-amber-500 to-emerald-500" />

      {/* Timeline Items */}
      <div className="relative space-y-12">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0
          const Icon = item.icon

          return (
            <div key={item.id} className="relative">
              {/* Center Circle */}
              <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-4 bg-background",
                    item.borderColor,
                  )}
                >
                  <Icon className={cn("h-5 w-5", item.textColor)} />
                </div>
              </div>

              {/* Content Card */}
              <div className={cn("relative w-[calc(50%-3rem)]", isLeft ? "mr-auto pr-4" : "ml-auto pl-4")}>
                {/* Dotted Line */}
                <div
                  className={cn(
                    "absolute top-6 h-0.5 w-8 border-t-2 border-dashed border-muted-foreground/50",
                    isLeft ? "right-0" : "left-0",
                  )}
                />

                <div
                  className={cn(
                    "cursor-pointer rounded-xl border bg-card p-5 shadow-lg transition-all hover:shadow-xl",
                  )}
                  onClick={() => {
                    setSelectedItem(item)
                  }}
                >
                  {/* Year Badge */}
                  <div
                    className={cn("mb-3 inline-block rounded-full px-4 py-1 text-sm font-bold text-white", item.color)}
                  >
                    {item.year}
                  </div>

                  <div>
                    <img src={item.image} alt={item.title} className="mb-4 h-60 w-full rounded-lg object-cover" />
                  </div>

                  {/* Title */}
                  <h3 className={cn("mb-2 text-lg font-bold", item.textColor)}>{item.title}</h3>

                  {/* Summary */}
                  <p className="mb-3 text-sm text-muted-foreground">{item.summary}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative grid max-h-[100100vh] w-full max-w-6xl grid-cols-1 overflow-hidden rounded-xl bg-background shadow-xl md:grid-cols-[400px_1fr]">

            <div className="relative hidden md:block">
              <Image
                src={selectedItem.content.image || "/fallback-image.png"}
                alt={selectedItem.title}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {selectedItem.contentNext && (
                <div className="absolute bottom-4 left-4 right-4 flex space-x-2 rounded-lg bg-black/50 p-1 backdrop-blur-sm">
                  <button
                    onClick={() => setShowDetailedContent(false)}
                    className={cn(
                      "flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                      !showDetailedContent
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-white/70 hover:bg-white/10"
                    )}
                  >
                    Thông tin chung
                  </button>
                  <button
                    onClick={() => setShowDetailedContent(true)}
                    className={cn(
                      "flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                      showDetailedContent
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-white/70 hover:bg-white/10"
                    )}
                  >
                    Chi tiết Nghị quyết
                  </button>
                </div>
              )}
            </div>

            {/* ===== RIGHT: CONTENT (Đã Cập nhật logic hiển thị chi tiết) ===== */}
            <div className="relative max-h-[90vh] overflow-y-auto p-6">
              {/* Close */}
              <button
                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground cursor-pointer text-2xl font-bold"
                onClick={() => {
                  setShowDetailedContent(false);
                  setSelectedItem(null)
                }}
              >
                ✕
              </button>

              {/* Header (Hiển thị cố định) */}
              <div className="mb-6">
                <span
                  className={cn(
                    "inline-block rounded-full px-4 py-1 text-sm font-bold text-white",
                    selectedItem.color
                  )}
                >
                  {selectedItem.year}
                </span>
                <h2 className="mt-2 text-2xl font-bold">{selectedItem.title}</h2>
                <p className="mt-1 text-muted-foreground">{selectedItem.summary}</p>
              </div>

              {/* Logic hiển thị nội dung chính hoặc nội dung chi tiết */}
              <div className="space-y-6">
                {!showDetailedContent ? (
                  // --- NỘI DUNG CHÍNH (content) - Áp dụng chung cho mọi Đại hội ---
                  <>
                    {/* Bối cảnh */}
                    <div className="rounded-xl border bg-muted/30 p-4">
                      <h3 className="mb-3 font-bold">Bối cảnh</h3>
                      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr]">
                        {/* ===== CỘT 1: TRONG NƯỚC ===== */}
                        <div>
                          <p className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            Trong nước
                          </p>
                          <ul className="mt-2 space-y-2 text-sm">
                            {selectedItem.content.background.domestic.map((p, i) => (
                              <li key={i}>• {p}</li>
                            ))}
                          </ul>
                        </div>

                        {/* ===== DIVIDER (NGĂN CÁCH) ===== */}
                        <div className="hidden md:block">
                          <div className="h-full w-px bg-gray-300 dark:bg-gray-700 mx-2" aria-hidden="true" />
                        </div>

                        {/* ===== CỘT 2: QUỐC TẾ ===== */}
                        <div>
                          <p className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            Quốc tế
                          </p>
                          <ul className="mt-2 space-y-2 text-sm">
                            {selectedItem.content.background.international.map((p, i) => (
                              <li key={i}>• {p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Chuyển đổi chính sách */}
                    <div>
                      <h2 className="mb-4 text-base font-bold">Chuyển đổi chính sách</h2>
                      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr]">
                        {/* Chính sách cũ */}
                        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                          <h3 className="mb-2 font-semibold text-destructive">Chính sách cũ</h3>
                          <ul className="space-y-1 text-sm">
                            {selectedItem.content.oldPolicies.map((p, i) => (
                              <li key={i} className="flex gap-2">
                                {/* Giả sử XCircle là component icon */}
                                <XCircle className="mt-0.5 h-3.5 w-3.5 text-destructive" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex items-center justify-center">
                          {/* Giả sử ArrowRight là component icon */}
                          <ArrowRight className="h-8 w-8 text-muted-foreground" />
                        </div>

                        {/* Chính sách mới */}
                        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                          <h3 className="mb-2 font-semibold text-emerald-600">Chính sách mới</h3>
                          <ul className="space-y-1 text-sm">
                            {selectedItem.content.newPolicies.map((p, i) => (
                              <li key={i} className="flex gap-2">
                                {/* Giả sử CheckCircle là component icon */}
                                <CheckCircle className="mt-0.5 h-3.5 w-3.5 text-emerald-500" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Mục tiêu & Nhiệm vụ */}
                    {selectedItem.content.targetsAndMissions && selectedItem.content.targetsAndMissions.length > 0 && (
                      <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">
                        <h3 className="mb-2 font-bold text-blue-600">Mục tiêu & Nhiệm vụ</h3>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          {selectedItem.content.targetsAndMissions.map((mission, i) => (
                            <li key={i}>{mission}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Sự kiện */}
                    <div>
                      <h3 className="mb-2 font-bold">Sự kiện nổi bật</h3>
                      <ul className="rounded-lg bg-muted p-3 text-sm list-disc pl-5">
                        {selectedItem.content.events.map((event, index) => (
                          <li key={index} className="mb-1">
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  // --- NỘI DUNG CHI TIẾT (contentNext) - Logic phân nhánh cho ĐH VIII và ĐH IX ---
                  selectedItem.contentNext && (
                    <div className="space-y-6">

                      {/* TIÊU ĐỀ CHUNG */}
                      {selectedItem.contentNext.majorLessons ? (
                        <h3 className="text-xl font-bold text-primary border-b pb-2">Nghị quyết và Chủ trương sau Đại hội</h3>
                      ) : (
                        <h3 className="text-xl font-bold text-amber-600 border-b pb-2">Nghị quyết và Chủ trương sau Đại hội IX</h3>
                      )}


                      {/* 1. Nền tảng Tư tưởng & Mô hình Kinh tế (Chỉ có trong ĐH IX) */}
                      {selectedItem.contentNext.ideologicalFoundation && (
                        <div className="rounded-xl border border-indigo-500/30 bg-indigo-50/50 p-4 space-y-4">
                          <h4 className="font-bold text-indigo-700">Nền tảng Tư tưởng & Mô hình Kinh tế</h4>

                          {/* Tư tưởng Hồ Chí Minh */}
                          {selectedItem.contentNext.ideologicalFoundation.hoChiMinhThought && (
                            <div className="space-y-1">
                              <p className="font-semibold text-sm">Tư tưởng Hồ Chí Minh:</p>
                              <ul className="space-y-1 text-sm list-disc pl-5">
                                {selectedItem.contentNext.ideologicalFoundation.hoChiMinhThought.map((item, i) => (
                                  <li key={`hcm-${i}`}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Mô hình kinh tế */}
                          {selectedItem.contentNext.ideologicalFoundation.economicModel && (
                            <div className="space-y-1">
                              <p className="font-semibold text-sm">Mô hình Kinh tế:</p>
                              <ul className="space-y-1 text-sm list-disc pl-5">
                                {selectedItem.contentNext.ideologicalFoundation.economicModel.map((item, i) => (
                                  <li key={`econ-${i}`}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {selectedItem.contentNext.economicOrientation && (
                        <div className="rounded-xl border border-blue-500/30 bg-blue-50/50 p-4 space-y-2">
                          <h4 className="font-bold text-blue-700">Định hướng phát triển toàn diện</h4>
                          <ul className="space-y-1 text-sm list-disc pl-5">
                            {selectedItem.contentNext.economicOrientation.content.map((item, i) => (
                              <li key={`econ-ori-${i}`}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* 4. Chiến lược Bảo vệ Tổ quốc (Chỉ có trong ĐH IX) */}
                      {selectedItem.contentNext.nationalDefenseStrategy && (
                        <div className="rounded-xl border border-red-500/30 bg-red-50/50 p-4 space-y-4">
                          <h4 className="font-bold text-red-700">Chiến lược Bảo vệ Tổ quốc</h4>

                          <div className="space-y-1">
                            <p className="font-semibold text-sm">Mục tiêu:</p>
                            <ul className="space-y-1 text-sm list-disc pl-5">
                              {selectedItem.contentNext.nationalDefenseStrategy.aims.map((item, i) => (
                                <li key={`aim-${i}`}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-1">
                            <p className="font-semibold text-sm">Nhiệm vụ cơ bản:</p>
                            <ul className="space-y-1 text-sm list-disc pl-5">
                              {selectedItem.contentNext.nationalDefenseStrategy.basicTasks.map((item, i) => (
                                <li key={`task-${i}`}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* 5. Chỉ đạo của Trung ương sau Đại hội (ĐH IX) */}
                      {selectedItem.contentNext.postCongressResolutions?.economyAndLand && (
                        <div className="rounded-xl border p-4 bg-muted/50 space-y-4">
                          <h4 className="font-bold text-gray-800">Chỉ đạo của Trung ương Khóa IX</h4>

                          {/* Kinh tế và Đất đai */}
                          <div className="space-y-1">
                            <p className="font-semibold text-sm">Đổi mới Kinh tế & Quản lý Đất đai:</p>
                            <ul className="space-y-1 text-sm list-disc pl-5">
                              {selectedItem.contentNext.postCongressResolutions.economyAndLand.map((item, i) => (
                                <li key={`eco-res-${i}`}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Xây dựng Đảng */}
                          {selectedItem.contentNext.postCongressResolutions.partyBuilding && (
                            <div className="space-y-1">
                              <p className="font-semibold text-sm">Xây dựng Đảng, Tư tưởng & Đạo đức:</p>
                              <ul className="space-y-1 text-sm list-disc pl-5">
                                {selectedItem.contentNext.postCongressResolutions.partyBuilding.map((item, i) => (
                                  <li key={`party-res-${i}`}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                        </div>
                      )}

                      {/* ==================================================================== */}
                      {/* LOGIC DÀNH CHO ĐẠI HỘI VIII                    */}
                      {/* ==================================================================== */}

                      {/* Các bài học lớn (Chỉ có trong ĐH VIII) */}
                      {selectedItem.contentNext.majorLessons && (
                        <div className="rounded-xl border p-4 bg-yellow-50/50">
                          <h4 className="mb-2 font-bold text-yellow-700">6 Bài học kinh nghiệm lớn (10 năm Đổi mới)</h4>
                          <ul className="space-y-1 text-sm list-decimal pl-5">
                            {selectedItem.contentNext.majorLessons.map((lesson, i) => (
                              <li key={i}>{lesson}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Quan điểm về Công nghiệp hóa, Hiện đại hóa (Chỉ có trong ĐH VIII) */}
                      {selectedItem.contentNext.postCongressResolutions?.industrializationViews && (
                        <div className="rounded-xl border p-4">
                          <h4 className="mb-2 font-bold text-cyan-600">Quan điểm về CNH, HĐH</h4>
                          <ul className="space-y-1 text-sm list-disc pl-5">
                            {selectedItem.contentNext.postCongressResolutions.industrializationViews.map((view, i) => (
                              <li key={i}>{view}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Xây dựng Nhà nước và Hệ thống chính trị (Chỉ có trong ĐH VIII) */}
                      {selectedItem.contentNext.postCongressResolutions?.stateAndSystemBuilding && (
                        <div className="rounded-xl border p-4 bg-blue-50/50">
                          <h4 className="mb-2 font-bold text-blue-600">Xây dựng Nhà nước & Hệ thống Chính trị (NQ 03/1997)</h4>
                          <p className="text-xs text-muted-foreground mb-2">Hội nghị Trung ương 3 khóa VIII</p>
                          <ul className="space-y-1 text-sm list-disc pl-5">
                            {selectedItem.contentNext.postCongressResolutions.stateAndSystemBuilding.focus.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Xây dựng Đảng (Chỉ có trong ĐH VIII) */}
                      {selectedItem.contentNext.postCongressResolutions?.partyBuilding && !selectedItem.contentNext.ideologicalFoundation && (
                        <div className="rounded-xl border p-4 bg-red-50/50">
                          <h4 className="mb-2 font-bold text-red-600">Xây dựng Đảng & Chống Suy thoái (NQ 10/1999)</h4>
                          <ul className="space-y-1 text-sm list-disc pl-5">
                            {selectedItem.contentNext.postCongressResolutions.partyBuilding.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Văn hóa, Giáo dục & KHCN (Chỉ có trong ĐH VIII) */}
                      {selectedItem.contentNext.postCongressResolutions?.socialAndCulturalDevelopment?.educationAndScience && (
                        <div className="space-y-4">
                          {/* Giáo dục/KHCN */}
                          <div className="rounded-xl border p-4 bg-emerald-50/50">
                            <h4 className="mb-2 font-bold text-emerald-600">Giáo dục & Khoa học – Công nghệ (NQ 02/1996)</h4>
                            <ul className="space-y-1 text-sm list-disc pl-5">
                              {selectedItem.contentNext.postCongressResolutions.socialAndCulturalDevelopment.educationAndScience.focus.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </div>
                          {/* Văn hóa */}
                          <div className="rounded-xl border p-4 bg-pink-50/50">
                            <h4 className="mb-2 font-bold text-pink-600">Văn hóa (NQ TW5/1998)</h4>
                            <ul className="space-y-1 text-sm list-disc pl-5">
                              {selectedItem.contentNext.postCongressResolutions.socialAndCulturalDevelopment.culture.focus.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}



      {/* End Label */}
      <div className="mt-8 flex justify-center">
        <div className="rounded-lg border-2 border-emerald-500 bg-background px-6 py-2 font-bold text-emerald-600 shadow-md">
          HIỆN TẠI
        </div>
      </div>
    </div>
  )
}
