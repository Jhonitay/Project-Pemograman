import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaCalendarDays } from 'react-icons/fa6'
import { FaPlus, FaMinus } from 'react-icons/fa6'

const OrderForm = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [jumlahTiket, setJumlahTiket] = useState(1)
  const navigate = useNavigate()

  const tambahTiket = () => {
    setJumlahTiket((prev) => prev + 1)
  }

  const kurangiTiket = () => {
    if (jumlahTiket > 1) {
      setJumlahTiket((prev) => prev - 1)
    }
  }

  const handleConfirm = () => {
    // Periksa apakah startDate, endDate, dan jumlahTiket telah terisi
    if (startDate && endDate > 0) {
      // Lakukan navigasi hanya jika semua form terisi
      navigate('/order')
    } else {
      // Tampilkan pesan kesalahan atau lakukan tindakan lain sesuai kebutuhan
      console.error('Harap isi semua formulir sebelum pesan.')
    }
  }

  return (
    <div className=" mx-auto flex w-full flex-col gap-1 rounded-xl bg-white p-6 lg:w-5/12 xl:w-4/12">
      <h4 className="mb-2 text-md font-semibold text-primary-950">
        Data Pesanan
      </h4>
      <div className="mb-1 flex flex-col items-center gap-1">
        <div className="relative flex w-full flex-col">
          <label className="mb-2 text-base font-normal text-gray-600">
            Tanggal Mulai
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Pilih tanggal mulai"
            className="w-full rounded-xl border border-primary-200  px-4 py-2 text-primary-950"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 top-8 flex items-center px-3">
            <FaCalendarDays className="h-5 w-5 text-gray-500 " />
          </div>
        </div>

        <div className="relative flex w-full flex-col">
          <label className="mb-2 text-base font-normal text-gray-600">
            Tanggal Selesai
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={startDate} // set minDate ke startDate
            dateFormat="dd/MM/yyyy"
            placeholderText="Pilih tanggal akhir"
            className="w-full rounded-xl border border-primary-200  px-4 py-2 text-primary-950"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 top-8 flex items-center px-3">
            <FaCalendarDays className="h-5 w-5 text-gray-500 " />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label className="mb-2 text-base font-normal text-gray-600">
          Jumlah Tiket
        </label>
        <div className=" flex items-center ">
          <div className="relative flex w-full">
            <input
              type="number"
              className="relative w-full rounded-xl border border-primary-200 px-4 py-2 text-primary-950"
              placeholder="Jumlah"
              value={jumlahTiket}
              onChange={(e) => setJumlahTiket(parseInt(e.target.value))}
            />
            <button
              className="absolute right-11 top-2.5 h-6 rounded-md bg-primary-50 px-2 py-1"
              onClick={kurangiTiket}
            >
              <FaMinus className="items-center text-primary-800" size={15} />
            </button>
            <button
              className="absolute right-2 top-2.5 h-6 rounded-md bg-primary-50 px-2 py-1"
              onClick={tambahTiket}
            >
              <FaPlus className="text-primary-800" size={15} />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className={`rounded-3xl px-6 py-3 text-center text-base font-normal text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
            !startDate || !endDate || jumlahTiket <= 0
              ? 'cursor-not-allowed bg-gray-300'
              : 'bg-primary-500'
          }`}
          onClick={handleConfirm}
          disabled={!startDate || !endDate || jumlahTiket <= 0}
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  )
}

export default OrderForm
