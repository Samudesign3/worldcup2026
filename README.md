# 🏆 2026 美加墨世界盃完整賽程表 (FIFA World Cup 2026 Schedule)

![FIFA World Cup 2026](https://img.shields.io/badge/FIFA-World__Cup__2026-blue?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-success?style=for-the-badge)

這個專案收錄了 **2026年世界盃（FIFA World Cup 2026）全部 104 場賽事** 的完整時間表。所有賽事時間已完全校正並同步為 **香港/北京時間 (HKT / GMT+8)**，並整合了最新賽果與香港電視直播資訊（ViuTV 99台、Now TV）。

> 🔗 **網頁版即時瀏覽**：[點擊這裡觀看網頁 (請自行替換成你的 GitHub Pages 網址)](https://samudesign3.github.io/worldcup2026/)

---

## ✨ 專案特點 (Features)

* **104場全賽事覆蓋**：從揭幕戰、小組賽、新增的 32 強淘汰賽，一路上演到冠軍決賽。
* **時區全面校正**：美加墨當地時間全面轉換為 **香港時間 (HKT)**，包含跨日更正，不用再自己算時差。
* **即時賽果更新**：持續跟進最新比數與晉級球隊資訊。
* **電視直播指南**：完整標註免費電視 ViuTV 99台 及 Now TV 的直播頻道分流。
* **Google Sheets 友好**：資料結構採用 Tab 鍵分隔 (TSV) 格式，可直接複製（Copy & Paste）匯入 Google 試算表做篩選或排序。

---

## 📅 欄位結構說明 (Data Fields)

如果你想要將此資料匯入你的試算表，表格包含了以下結構：

| 欄位名稱 | 說明 |
| :--- | :--- |
| **場次** | 第 1 場至第 104 場官方賽事編號 |
| **賽事階段/小組** | 標示 A~L 組或對應的淘汰賽階段（如 32強、16強、8強） |
| **香港日期 (HKT)** | 已換算為香港當地的實際日期（YYYY-MM-DD） |
| **香港時間** | 香港開賽時間（包含凌晨、上午、中午、晚上） |
| **對陣組合 / 最新賽果** | 參賽球隊或即時比賽比數 |
| **電視直播頻道** | 標示 Viu TV 99台（免費）/ Now 618 / 616 / 617 / 619 台 |
| **比賽場館 / 城市 / 國家** | 該場賽事舉辦的實際地理位置 |

---

## 🚀 如何本地運行與開發 (Development)

如果你想修改這個網頁或擴充功能：

1. 克隆這個檔案庫 (Clone the repository)：
   ```bash
   git clone [https://github.com/Samudesign3/worldcup2026.git](https://github.com/Samudesign3/worldcup2026.git)
