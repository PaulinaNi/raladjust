const dataFromDatabase = [
 {
  _id: 1,
  warehouse: '55',
  type: 'Cycle',
  by: 'PN',
  data: '01/02/2022',
  status: 'in progress',
  countdata: [
   {
    bin: '10E06A',
    sku: 'GD001BLACL',
    physical: 9,
    pickface: 11,
    overflow: 0,
    totalCount() {
     return this.pickface + this.overflow
    },
    difference() {
     return this.totalCount() - this.physical
    }
   },
   {
    bin: '10E02A',
    sku: 'GD001BLACxL',
    physical: 80,
    pickface: 81,
    overflow: 72,
    totalCount() {
     return this.pickface + this.overflow
    },
    difference() {
     return this.totalCount() - this.physical
    }
   }
  ]
 },
 {
  _id: 2,
  warehouse: '06',
  type: 'Cycle',
  by: 'KN',
  data: '01/02/2022',
  status: 'in progress',
  countdata: [
   {
    bin: '10E02A',
    sku: 'GD002BLACL',
    physical: 15,
    pickface: 13,
    overflow: 0,
    totalCount() {
     return this.pickface + this.overflow
    },
    difference() {
     return this.totalCount() - this.physical
    }
   },
   {
    bin: '10E04A',
    sku: 'GD002BLACxL',
    physical: 80,
    pickface: 81,
    overflow: 72,
    totalCount() {
     return this.pickface + this.overflow
    },
    difference() {
     return this.totalCount() - this.physical
    }
   }
  ]
 },
 {
  _id: 3,
  warehouse: '08',
  type: 'Misc 1',
  by: 'PN',
  data: '01/02/2022',
  status: 'Completed',
  countdata: [
   {
    bin: '10E02A',
    sku: 'GD003BLACL',
    physical: 15,
    pickface: 10,
    overflow: 0,
    totalCount() {
     return this.pickface + this.overflow
    },
    difference() {
     return this.totalCount() - this.physical
    }
   },
   {
    bin: '10C04A',
    sku: 'GD003BLACxL',
    physical: 80,
    pickface: 40,
    overflow: 72,
    totalCount() {
     return this.pickface + this.overflow
    },
    difference() {
     return this.totalCount() - this.physical
    }
   }
  ]
 }
]
