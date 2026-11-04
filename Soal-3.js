const studentsArrayOfObjects = [
  {
    id: 1100,
    nama: "Budi",
    jurusan: "Sistem Komputer",
    nilaiNilai: [80, 90, 75]
  },
  {
    id: 1210,
    nama: "Siti",
    jurusan: "Teknik Informatika",
    nilaiNilai: [90, 100, 67]
  },
  {
    id: 1232,
    nama: "Andi",
    jurusan: "Sistem Informasi",
    nilaiNilai: [78, 80, 100]
  },
  {
    id: 4324,
    nama: "Dewi",
    jurusan: "Teknik Komputer",
    nilaiNilai: [88, 60, 50]
  },
  {
    id: 5612,
    nama: "Rina",
    jurusan: "Sistem Komputer",
    nilaiNilai: [92, 75, 78]
  },
  {
    id: 1645,
    nama: "Joko",
    jurusan: "Teknik Informatika",
    nilaiNilai: [80, 60, 90]
  },
  {
    id: 972,
    nama: "Sari",
    jurusan: "Sistem Informasi",
    nilaiNilai: [95, 100, 100]
  }
];

const processStudents = (students) =>
  students
    .map((student) => ({
      ...student,
      nama: student.nama.toUpperCase(),
      rataRataNilai:
        student.nilaiNilai.reduce((sum, value) => sum + value, 0) /
        student.nilaiNilai.length
    }))
    .filter((student) => student.rataRataNilai > 85)
    .sort((a, b) => b.id - a.id);

console.log(processStudents(studentsArrayOfObjects));
