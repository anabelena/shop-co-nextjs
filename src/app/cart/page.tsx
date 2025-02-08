"use client";
import { useShoppingCart } from "@/Hooks/useShoppingCart";
import Button from "@/components/Button";
import QuantitySelector from "@/components/QuantitySelector";
import { MoveRight, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Cart() {
  const { count, cartProducts, updateQuantity, removeFromCart } =
    useShoppingCart();

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-left">
            <h1 className="font-heading font-bold text-xl text-gray-700 sm:text-3xl">
              YOUR CART
            </h1>
          </div>

          <div className="mt-8 border border-baseBg px-5 py-5">
            <ul className="space-y-8">
              {cartProducts.map((product) => (
                <li key={product.id} className="flex items-center gap-2 ">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      className="w-[124px] h-[124px] cursor-pointer   "
                      src={product.image}
                      alt={product.title}
                      width={295}
                      height={298}
                      style={{ objectFit: "contain" }}
                    />
                  </Link>

                  <div>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-bold text-gray-900 hover:underline cursor-pointer">
                      {product.title.slice(0, 22)}
                    </h3>
                  </Link>

                    <dl className="mt-0.5 space-y-px text-md text-gray-600">
                      <div>
                        <dt className="inline font-semibold">Size: </dt>
                        <dd className="inline">{product.size}</dd>
                      </div>

                      <div>
                        <dt className="inline font-semibold">Color: </dt>
                        <dd className="inline">{product.color}</dd>
                      </div>

                      <div>
                        <dt className="inline font-semibold">Price: </dt>
                        <dd className="inline">{product.price}</dd>
                      </div>

                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <QuantitySelector
                      quantity={product.quantity}
                      handleIncrement={() => {
                        if (product.quantity < 10) {
                          updateQuantity(product.id, product.quantity + 1);
                        }
                      }}
                      handleDecrement={() =>
                        updateQuantity(product.id, product.quantity - 1)
                      }
                    />

                    <Trash2
                      color="red"
                      className="cursor-pointer"
                      onClick={() => removeFromCart(product.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <h3 className="font-heading text-lg font-bold">
                  {" "}
                  Order Summary{" "}
                </h3>
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Total Items</dt>
                    <dd>{count}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>$25</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-$20</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>$200</dd>
                  </div>
                </dl>

                <div className="relative flex justify-center border border-red">
                  <div className=" flex justify-center relative">
                    <Button type="neutral" text="Go to Checkout">
                      <MoveRight />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
