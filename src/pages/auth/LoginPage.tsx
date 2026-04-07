import { Button, Card, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

type LoginFormValues = {
  email: string
  password: string
}

export function LoginPage() {
  const [form] = Form.useForm<LoginFormValues>()

  return (
    <Card variant="borderless" styles={{ body: { padding: 0 } }}>
      <header style={{ marginBottom: 18 }}>
        <Typography.Title level={2} style={{ marginBottom: 4 }}>
          Sign In
        </Typography.Title>
        <Typography.Text type="secondary">
          Welcome back. Continue shaping your career with us.
        </Typography.Text>
      </header>

      <Form<LoginFormValues>
        form={form}
        layout="vertical"
        requiredMark={false}
        initialValues={{ remember: true }}
        onFinish={(values) => {
          console.log('login.submit', values)
        }}
      >
        <Form.Item
          label="Corporate Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="name@company.com" size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
          hasFeedback
        >
          <Input.Password placeholder="••••••••" size="large" />
        </Form.Item>

        <Button type="primary" htmlType="submit" size="large" block>
          Sign In
        </Button>
      </Form>

      <footer style={{ marginTop: 18, textAlign: 'center' }}>
        <Typography.Text type="secondary">
          Don&apos;t have an account? <Link to="/register">Create Account</Link>
        </Typography.Text>
      </footer>
    </Card>
  )
}
