import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { PatternFormat } from "react-number-format";
import Services from "../services/Services";
import cartHero from "@/assets/hero.png";
import logo from "@/assets/vite.svg";
import { RightOutlined } from "@ant-design/icons";
import axios from "axios";
import { clearCart } from "@/redux/features/cart";

const Checkout = () => {
  const BOT_TOKEN = "7497849013:AAGf4gvd55nVM8C7hO-3-k-DTKHb9843M_o";
  const USER_ID = "1234327021";
  //    https://api.telegram.org/bot7497849013:AAGf4gvd55nVM8C7hO-3-k-DTKHb9843M_o/getUpdates
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const cart = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();
  if (!cart.length) {
    return <Navigate replace to="/cart" />;
  }

  const onFinish = (values) => {
    let text = "";
    text += `Buyurtma %0A`;
    text += `Name: ${values.name} %0A`;
    text += `Surname: ${values.surname} %0A`;
    text += `CompanyName: ${values.companyName} %0A`;
    text += `Country: ${values.country} %0A`;
    text += `Address: ${values.address} %0A`;
    text += `Province: ${values.province} %0A`;
    text += `Zip Code: ${values.zipCode} %0A`;
    text += `Phone: ${values.phone} %0A`;
    text += `Email: ${values.email} %0A`;
    text += `Info: ${values.info} %0A %0A`;

    cart.forEach((product) => {
      text += `Products📃 %0A`;
      text += `Name: ${product.title} %0A`;
      text += `Quantity: ${product.quantity} %0A`;
      text += `Price: ${product.price} %0A %0A`;
    });
    text += `Jami: $${cart
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2)}`;
    console.log("Success:", values, "Payment Method:", paymentMethod);
    axios
      .get(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}`
      )
      .then((res) => dispatch(clearCart()));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-3 ">
      <div
        className="flex justify-center items-center flex-col  h-[300px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cartHero})` }}
      >
        <div>
          <img src={logo} alt="logo" className="mx-auto" />
          <h2 className="text-[48px] font-medium px-3">Checkout</h2>
        </div>
        <div className="flex gap-2">
          <Link to={"/"} className="font-semibold">
            Home
          </Link>
          <RightOutlined />
          <p>Checkout</p>
        </div>
      </div>
      <h1 className="text-[35px] text-[#3A3A3A] font-bold mb-8 mt-6">
        Billing Details
      </h1>

      <div className="flex justify-between gap-10 max-md:flex-col">
        <div className="w-[50%] max-md:w-full">
          <Form
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="name"
              rules={[{ required: true }]}
            >
              <Input className="h-[45px]" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="surname"
              rules={[{ required: true }]}
            >
              <Input className="h-[45px]" />
            </Form.Item>

            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[{ required: true }]}
            >
              <Input className="h-[45px]" />
            </Form.Item>

            <Form.Item
              label="Country / Region"
              name="country"
              rules={[{ required: true }]}
            >
              <Input className="h-[45px]" />
            </Form.Item>

            <Form.Item
              label="Street Address"
              name="address"
              rules={[{ required: true }]}
            >
              <Input className="h-[45px]" />
            </Form.Item>

            <Form.Item
              label="Town / City"
              name="city"
              rules={[{ required: true }]}
            >
              <Input className="h-[45px]" />
            </Form.Item>

            <Form.Item
              label="Province"
              name="province"
              rules={[{ required: true }]}
            >
              <Input className="h-[45px]" />
            </Form.Item>

            <Form.Item
              label="Zip Code"
              name="zipCode"
              rules={[{ required: true }]}
            >
              <Input className="h-[45px]" />
            </Form.Item>

            <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
              <PatternFormat
                format="+998 (##) ###-##-##"
                allowEmptyFormatting
                mask="_"
                className="border rounded-[3px] border-gray-300 ant-input h-[45px] w-full"
              />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input className="h-[45px]" />
            </Form.Item>

            <Form.Item label="Additional Information" name="info">
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full  h-[45px] mt-4"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="w-[50%] max-md:w-full space-y-4">
          <div className="mt-2 ">
            <div className="flex items-center justify-between">
              <h3 className="text-[22px] text-[#3A3A3A] font-semibold">
                Product
              </h3>
              <h3 className="text-[22px] text-[#3A3A3A] font-semibold">
                Subtotal
              </h3>
            </div>
            <div>
              {cart?.map((item) => (
                <div key={item.id} className="mb-2 text-[16px]">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.title} * {item.quantity}</span>
                    <span className="text-gray-600">
                      <strong className="text-[#B88E2F]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </span>
                  </div>
                </div>
              ))}

              <p className="text-[#B88E2F] text-[20px] mt-4">
                <span className="text-black text-[18px] font-medium mr-2">
                  Total:
                </span>
                <strong>
                  $
                  {cart
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toFixed(2)}
                </strong>
              </p>
            </div>
          </div>
          <div
            onClick={() => setPaymentMethod("bank")}
            className={`flex items-start gap-3 p-3 border rounded cursor-pointer ${
              paymentMethod === "bank"
                ? "bg-[#F9F1E7] border-[#B88E2F]"
                : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === "bank"}
              onChange={() => setPaymentMethod("bank")}
            />
            <label className="text-[#3A3A3A]">
              Direct Bank Transfer
              <p className="text-[#9F9F9F] mt-2 text-sm">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </label>
          </div>

          <div
            onClick={() => setPaymentMethod("cash")}
            className={`flex items-center gap-3 p-3 border rounded cursor-pointer ${
              paymentMethod === "cash"
                ? "bg-[#F9F1E7] border-[#B88E2F]"
                : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
            />
            <label className="text-[#3A3A3A]">Cash On Delivery</label>
          </div>

          <p className="mt-3 text-sm text-[#666] leading-relaxed">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-bold">privacy policy</span>.
          </p>

          <button className="max-w-[300px] h-[50px] border text-[#B88E2F] w-full mt-5 rounded-[10px] flex items-center justify-center hover:text-amber-700 duration-300 cursor-pointer">
            Place Order
          </button>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default React.memo(Checkout);
