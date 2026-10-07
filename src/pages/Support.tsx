import { FormEvent, useState } from 'react'

type FormData = {
  fullName: string
  phone: string
  service: string
  subject: string
  content: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const initialForm: FormData = {
  fullName: '',
  phone: '',
  service: '',
  subject: '',
  content: '',
}

function Support() {
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [requestCode, setRequestCode] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  function validateForm() {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên.'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại.'
    } else if (!/^(0|\+84)\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Số điện thoại không hợp lệ.'
    }

    if (!formData.service) {
      newErrors.service = 'Vui lòng chọn loại dịch vụ.'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Vui lòng nhập chủ đề hỗ trợ.'
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Vui lòng nhập nội dung cần hỗ trợ.'
    } else if (formData.content.trim().length < 10) {
      newErrors.content = 'Nội dung cần có ít nhất 10 ký tự.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSuccessMessage('')
    setRequestCode('')

    if (!validateForm()) {
      return
    }

    const code = `TC-${Date.now().toString().slice(-8)}`

    setRequestCode(code)
    setSuccessMessage(
      'Yêu cầu hỗ trợ đã được ghi nhận thành công.'
    )

    setFormData(initialForm)
    setErrors({})
  }

  return (
    <div className="container support-page">
      <div className="support-header">
        <h1>Gửi yêu cầu hỗ trợ</h1>

        <p>
          Vui lòng cung cấp thông tin để TeleCare ghi nhận
          yêu cầu hỗ trợ của bạn.
        </p>
      </div>

      <form className="support-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Họ và tên</label>

          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullName: e.target.value,
              })
            }
          />

          {errors.fullName && (
            <span className="form-error">
              {errors.fullName}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Số điện thoại</label>

          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
          />

          {errors.phone && (
            <span className="form-error">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="service">Loại dịch vụ</label>

          <select
            id="service"
            value={formData.service}
            onChange={(e) =>
              setFormData({
                ...formData,
                service: e.target.value,
              })
            }
          >
            <option value="">Chọn dịch vụ</option>
            <option value="goi-cuoc">Gói cước</option>
            <option value="data">Data / Internet</option>
            <option value="thoai">Gọi thoại</option>
            <option value="khac">Khác</option>
          </select>

          {errors.service && (
            <span className="form-error">
              {errors.service}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Chủ đề</label>

          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) =>
              setFormData({
                ...formData,
                subject: e.target.value,
              })
            }
          />

          {errors.subject && (
            <span className="form-error">
              {errors.subject}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="content">Nội dung hỗ trợ</label>

          <textarea
            id="content"
            rows={5}
            value={formData.content}
            onChange={(e) =>
              setFormData({
                ...formData,
                content: e.target.value,
              })
            }
          />

          {errors.content && (
            <span className="form-error">
              {errors.content}
            </span>
          )}
        </div>

        <button className="primary-button" type="submit">
          Gửi yêu cầu
        </button>
      </form>

      {successMessage && (
        <div className="support-success">
          <h3>{successMessage}</h3>

          <p>
            Mã yêu cầu: <strong>{requestCode}</strong>
          </p>

          <p>
            Đây là mã yêu cầu mô phỏng phục vụ prototype.
          </p>
        </div>
      )}
    </div>
  )
}

export default Support