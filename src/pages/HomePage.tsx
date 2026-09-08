import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="container text-center py-5">
      {/* Hero Section เดิม (ปรับขยายปุ่มให้เด่นขึ้น) */}
      <h2 className="fw-bold mb-3">Home Page</h2>
      <p className="text-muted fs-5">
        หากต้องการเริ่มต้นการใช้งาน สามารถกดได้ที่ปุ่มนี้เลย
      </p>

      <div className="d-flex flex-column align-items-center gap-2 mt-4">
        <Link
          className="btn btn-primary btn-lg px-5 py-2 shadow-sm rounded-pill fw-semibold"
          to="/my/todolistpage"
        >
          START
        </Link>
      </div>

      <div className="mt-5 mb-2 text-center">
        <span className="bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 fs-6 fw-semibold">
          จุดประสงค์การใช้งาน
        </span>
      </div>

      <div className="row g-4 mt-1 justify-content-center text-center">
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100 p-3 bg-light rounded-4">
            <h5 className="fw-bold text-dark">บันทึกงานง่าย ๆ </h5>
            <p className="text-muted small mb-0">
              จดบันทึกสิ่งที่ต้องทำในแต่ละวัน จะได้ไม่ลืมเรื่องเล็ก ๆ น้อย ๆ
              ที่ควรจะทำ
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4 text-center">
          <div className="card border-0 shadow-sm h-100 p-3 bg-light rounded-4">
            <h5 className="fw-bold text-dark">จัดการเวลา</h5>
            <p className="text-muted small mb-0 text-center ">
              ทำให้เราสามารถจัดตารางเวลาในการทำงานได้เนื่องจากมีข้อมูลว่างานเหลืออีกกี่งาน
              แล้วทำเสร็จไปแล้วกี่งาน
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
