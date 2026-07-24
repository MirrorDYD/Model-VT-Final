import { PrEntry } from "./types";

/**
 * Real Syteline procurement planning dataset for Requisition PR 12606C0016 (Kingwhale Corporation)
 * matches the user's manual Excel calculations:
 * 1. 18 days transit time for Taiwan (Keelung)
 * 2. 1000 YD MCQ threshold per color
 * 3. Exact quantities, CBMs, unit prices, and PR Due Dates (D/M/YYYY parsed correctly as DD/MM/YYYY)
 * 4. Shows Scenario 1 (Two shipments: Sep 11, Oct 4) vs Scenario 2.1 (Three shipments: Sep 11, Sep 18, Oct 4)
 */
export const SAMPLE_PR_DATA = [
  // Page 33 rows with DD/MM/YYYY dates
  { id: "PR-101", itemCode: "CKPXXBX60N018", colorCode: "BLK:BLACK", qty: 481.347, unitPrice: 2.75, prDueDateStr: "2026-09-30", cbm: 0.649818045, daysEarlyExcel: 5 },
  { id: "PR-002", itemCode: "CKPXXBX60N019", colorCode: "BLK:BLACK/BLACK X-DYE", qty: 1181.43, unitPrice: 6.40, prDueDateStr: "2026-09-30", cbm: 6.249749888, daysEarlyExcel: 10 },
  { id: "PR-003",
    itemCode: "CKXFLE0001000031",
    colorCode: "WSTO:WEATHERED STONE-DARK WEATHERED STON",
    qty: 771.205,
    unitPrice: 6.40,
    prDueDateStr: "2026-09-29",
    cbm: 4.079676037,
    daysEarlyExcel: 18
  },
  {
    id: "PR-004",
    itemCode: "CKXFLE0001100041",
    colorCode: "WSTO:WEATHERED STONE",
    qty: 14.843,
    unitPrice: 2.75,
    prDueDateStr: "2026-09-29",
    cbm: 0.020037915,
    daysEarlyExcel: 5
  },
  {
    id: "PR-005",
    itemCode: "CKXFLE0001100041",
    itemDescription: "WSTO:WEATHERED STONE",
    colorCode: "WSTO:WEATHERED STONE",
    qty: 431.153,
    unitPrice: 2.75,
    prDueDateStr: "2026-09-29",
    cbm: 0.58205628,
    daysEarlyExcel: 10
  },
  { id: "PR-106", itemCode: "CKPXXBX60N018", colorCode: "BLK:BLACK", qty: 77.891, unitPrice: 2.75, prDueDateStr: "2026-10-04", cbm: 0.10515285 },
  { id: "PR-107", itemCode: "CKPXXBX60N019", colorCode: "BLK:BLACK/BLACK X-DYE", qty: 229.483, unitPrice: 6.40, prDueDateStr: "2026-10-04", cbm: 1.213962954 },
  { id: "PR-108", itemCode: "CKPXXNX60N030", colorCode: "NENA:NEW NAVY/DARK NEW NAVY X-DYE", qty: 19.823, unitPrice: 6.40, prDueDateStr: "2026-10-04", cbm: 0.104865786 },
  { id: "PR-109", itemCode: "CKXFLE0001000016", colorCode: "OLGG:OLD GROWTH GREEN-BLACK X-DYE", qty: 2032.29, unitPrice: 6.40, prDueDateStr: "2026-10-04", cbm: 10.75082151 },
  { id: "PR-110", itemCode: "CKXFLE0001000031", colorCode: "WSTO:WEATHERED STONE-DARK WEATHERED STON", qty: 920.181, unitPrice: 6.40, prDueDateStr: "2026-10-02", cbm: 4.867756432 },
  { id: "PR-111", itemCode: "CKXFLE0001000041", colorCode: "WSTO:WEATHERED STONE", qty: 1020.03, unitPrice: 6.40, prDueDateStr: "2026-10-02", cbm: 6.375166875 },
  { id: "PR-112", itemCode: "CKXFLE0001000041", colorCode: "WSTO:WEATHERED STONE", qty: 280.417, unitPrice: 6.40, prDueDateStr: "2026-10-02", cbm: 1.75260375 },
  { id: "PR-113", itemCode: "CKXFLE0001100026", colorCode: "OLGG : OLD GROWTHGREEN", qty: 645.416, unitPrice: 2.75, prDueDateStr: "2026-10-04", cbm: 0.8713116 },
  { id: "PR-114", itemCode: "CKXFLE0001100041", colorCode: "WSTO:WEATHERED STONE", qty: 133.986, unitPrice: 2.75, prDueDateStr: "2026-10-03", cbm: 0.18088056 },
  { id: "PR-115", itemCode: "CKXFLE0001100052", colorCode: "FLBN:FOSSIL BROWN", qty: 111.979, unitPrice: 2.75, prDueDateStr: "2026-10-03", cbm: 0.151171785 },
  { id: "PR-116", itemCode: "CKPXXNX60N028", colorCode: "NENA:NEW NAVY", qty: 1633.39, unitPrice: 2.75, prDueDateStr: "2026-10-05", cbm: 2.205073125 },
  { id: "PR-117", itemCode: "CKPXXNX60N030", colorCode: "NENA:NEW NAVY/DARK NEW NAVY X-DYE", qty: 4787.73, unitPrice: 6.40, prDueDateStr: "2026-10-05", cbm: 25.32707266 },
  { id: "PR-118", itemCode: "CKPXXBX60N018", colorCode: "BLK:BLACK", qty: 37.169, unitPrice: 2.75, prDueDateStr: "2026-10-07", cbm: 0.050177475 },
  { id: "PR-119", itemCode: "CKPXXBX60N019", colorCode: "BLK:BLACK/BLACK X-DYE", qty: 262.267, unitPrice: 6.40, prDueDateStr: "2026-10-07", cbm: 1.387391901 },
  { id: "PR-120", itemCode: "CKPXXBX60N018", colorCode: "BLK:BLACK", qty: 120.406, unitPrice: 2.75, prDueDateStr: "2026-10-09", cbm: 0.1625481 },
  { id: "PR-121", itemCode: "CKPXXBX60N019", colorCode: "BLK:BLACK/BLACK X-DYE", qty: 840.769, unitPrice: 6.40, prDueDateStr: "2026-10-09", cbm: 4.447665365 },
  { id: "PR-122", itemCode: "CKPXXNX60N028", colorCode: "NENA:NEW NAVY", qty: 116.892, unitPrice: 2.75, prDueDateStr: "2026-10-09", cbm: 0.15780393 },
  { id: "PR-123", itemCode: "CKPXXNX60N030", colorCode: "NENA:NEW NAVY/DARK NEW NAVY X-DYE", qty: 813.189, unitPrice: 6.40, prDueDateStr: "2026-10-09", cbm: 4.301767694 },
  { id: "PR-124", itemCode: "CKXFLE0001100049", colorCode: "BLSG:BLUE SAGE", qty: 286.627, unitPrice: 2.75, prDueDateStr: "2026-10-08", cbm: 0.38694672 },
  { id: "PR-125", itemCode: "CKXFLE0008400002", colorCode: "BSGK:BLUE SAGE - SUMMIT BLUE X-DYE", qty: 907.055, unitPrice: 6.70, prDueDateStr: "2026-10-08", cbm: 5.66909375 },
  { id: "PR-125-2", itemCode: "CKXFLE0001100049", colorCode: "BLSG:BLUE SAGE", qty: 83.876, unitPrice: 2.75, prDueDateStr: "2026-10-08", cbm: 0.11323268 },
  { id: "PR-126", itemCode: "CKPXXNX60N028", colorCode: "NENA:NEW NAVY", qty: 69.448, unitPrice: 2.75, prDueDateStr: "2026-10-11", cbm: 0.09375426 },
  { id: "PR-127", itemCode: "CKPXXNX60N030", colorCode: "NENA:NEW NAVY/DARK NEW NAVY X-DYE", qty: 478.942, unitPrice: 6.40, prDueDateStr: "2026-10-11", cbm: 2.53360318 },
  { id: "PR-128", itemCode: "CKXFLE0001000016", colorCode: "OLGG:OLD GROWTH GREEN-BLACK X-DYE", qty: 910.285, unitPrice: 6.40, prDueDateStr: "2026-10-11", cbm: 4.815406592 },
  { id: "PR-129", itemCode: "CKXFLE0001100026", colorCode: "OLGG : OLD GROWTHGREEN", qty: 312.679, unitPrice: 2.75, prDueDateStr: "2026-10-11", cbm: 0.422115975 },
  { id: "PR-130", itemCode: "CKXFLE0001100049", colorCode: "BLSG:BLUE SAGE", qty: 110.586, unitPrice: 2.75, prDueDateStr: "2026-10-10", cbm: 0.149290965 },
  { id: "PR-131", itemCode: "CKXFLE0008400002", colorCode: "BSGK:BLUE SAGE - SUMMIT BLUE X-DYE", qty: 324.011, unitPrice: 6.70, prDueDateStr: "2026-10-10", cbm: 2.025065625 },
  { id: "PR-132", itemCode: "CKPXXNX60N028", colorCode: "NENA:NEW NAVY", qty: 28.694, unitPrice: 2.75, prDueDateStr: "2026-10-12", cbm: 0.03873744 },
  { id: "PR-133", itemCode: "CKPXXNX60N030", colorCode: "NENA:NEW NAVY/DARK NEW NAVY X-DYE", qty: 286.532, unitPrice: 6.40, prDueDateStr: "2026-10-12", cbm: 1.515756396 },
  { id: "PR-134", itemCode: "CKXFLE0001100049", colorCode: "BLSG:BLUE SAGE", qty: 7.811, unitPrice: 2.75, prDueDateStr: "2026-10-11", cbm: 0.010544715 },
  { id: "PR-135", itemCode: "CKXFLE0001100049", colorCode: "BLSG:BLUE SAGE", qty: 11.1, unitPrice: 2.75, prDueDateStr: "2026-10-11", cbm: 0.014984595 },
  { id: "PR-136", itemCode: "CKXFLE0008400002", colorCode: "BSGK:BLUE SAGE - SUMMIT BLUE X-DYE", qty: 32.522, unitPrice: 6.70, prDueDateStr: "2026-10-11", cbm: 0.203259375 },
  { id: "PR-137", itemCode: "CKXFLE0008400002", colorCode: "BSGK:BLUE SAGE - SUMMIT BLUE X-DYE", qty: 22.886, unitPrice: 6.70, prDueDateStr: "2026-10-11", cbm: 0.143034375 },
  { id: "PR-138", itemCode: "CKPXXCX60N023", colorCode: "NHG:NARWHAL GREY", qty: 1093.68, unitPrice: 2.75, prDueDateStr: "2026-10-14", cbm: 1.476462735 },
  { id: "PR-139", itemCode: "CKPXXCX60N023", colorCode: "NHG:NARWHAL GREY", qty: 1047, unitPrice: 2.75, prDueDateStr: "2026-10-23", cbm: 1.41345135 },
  { id: "PR-140", itemCode: "CKPXXCX60N028", colorCode: "STH:STONEWASH/NARWHAL GREY X-DYE", qty: 46.361, unitPrice: 6.40, prDueDateStr: "2026-10-14", cbm: 0.245250219 },
  { id: "PR-141", itemCode: "CKPXXCX60N028", colorCode: "STH:STONEWASH/NARWHAL GREY X-DYE", qty: 3044.44, unitPrice: 6.40, prDueDateStr: "2026-10-23", cbm: 16.1050675 },
  { id: "PR-142", itemCode: "CKPXXCX60N028", colorCode: "STH:STONEWASH/NARWHAL GREY X-DYE", qty: 3148.14, unitPrice: 6.40, prDueDateStr: "2026-10-14", cbm: 16.6536606 },
  { id: "PR-143", itemCode: "CKPXXNX60N028", colorCode: "NENA:NEW NAVY", qty: 197.095, unitPrice: 2.75, prDueDateStr: "2026-10-14", cbm: 0.245250219 },
  { id: "PR-144", itemCode: "CKPXXNX60N030", colorCode: "NENA:NEW NAVY/DARK NEW NAVY X-DYE", qty: 1983.77, unitPrice: 6.40, prDueDateStr: "2026-10-14", cbm: 10.49414965 },
  { id: "PR-145", itemCode: "CKPXXBX60N018", colorCode: "BLK:BLACK", qty: 1873.06, unitPrice: 2.75, prDueDateStr: "2026-10-14", cbm: 2.52863208 },
  { id: "PR-146", itemCode: "CKPXXBX60N019", colorCode: "BLK:BLACK/BLACK X-DYE", qty: 3000, unitPrice: 6.40, prDueDateStr: "2026-10-14", cbm: 15.87 },
  { id: "PR-147", itemCode: "CKPXXBX60N019", colorCode: "BLK:BLACK/BLACK X-DYE", qty: 2485.92, unitPrice: 6.40, prDueDateStr: "2026-10-22", cbm: 13.15052738 }
];

export function loadSamplePrEntries(): PrEntry[] {
  return SAMPLE_PR_DATA.map(item => {
    const parts = item.prDueDateStr.split("-");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    return {
      id: item.id,
      itemCode: item.itemCode,
      itemDescription: `${item.itemCode} Sourced Material`,
      colorCode: item.colorCode,
      qty: item.qty,
      originalQty: item.qty,
      unitPrice: item.unitPrice,
      prDueDate: new Date(year, month, day),
      cbm: item.cbm,
      moq: 500, // All items default to 500 MCQ matching their Excel
      daysEarlyExcel: (item as any).daysEarlyExcel,
      currency: "USD",
      currencyRate: undefined,
      vendor: "KINGWHALE CORPORATION"
    };
  });
}
