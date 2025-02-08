import { useState } from 'react';
import { X } from 'lucide-react';
import { Input } from "@heroui/input";
import AuthModalProps from '@/types/AuthModal';

export default function AuthModal({ onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData, isLogin);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md p-6 bg-black/90 rounded-2xl border border-primary/20 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 hover:bg-primary/10 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        <h2 className="mb-5 text-2xl font-bold ">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <Input
              isRequired
              label="Name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          )}

          <Input
            isRequired
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          <Input
            isRequired
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />

          <button className="w-full">
            <div className="items-center justify-center flex pl-4 pr-4 gap-4 pt-2 pb-2 bg-primary/20 rounded-lg border border-primary/20 cursor-pointer hover:bg-primary/50 transition-all duration-300">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </div>
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-primary hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}