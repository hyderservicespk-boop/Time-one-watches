import React from 'react';
import { motion } from 'motion/react';
import { Settings, Users, ShoppingCart, DollarSign, Package, TrendingUp } from 'lucide-react';

export function Admin() {
  const stats = [
    { title: 'Total Revenue', value: '$1.2M', icon: DollarSign, trend: '+12.5%' },
    { title: 'Active Orders', value: '45', icon: ShoppingCart, trend: '+5.2%' },
    { title: 'Registered Users', value: '1,240', icon: Users, trend: '+18.1%' },
    { title: 'Products in Stock', value: '312', icon: Package, trend: '-2.4%' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-[#1A1A1A] text-white p-6 flex flex-col">
        <h2 className="text-xl font-serif tracking-widest uppercase mb-12">Time One<br/><span className="text-[#D4AF37] text-sm">Admin</span></h2>
        <nav className="flex flex-col gap-4 flex-1">
          {['Dashboard', 'Orders', 'Products', 'Customers', 'Analytics', 'Settings'].map((item, i) => (
            <button key={item} className={`text-left text-sm uppercase tracking-wider py-3 px-4 transition-colors ${i === 0 ? 'bg-[#D4AF37] text-[#1A1A1A] font-bold' : 'text-[#A0A0A0] hover:bg-white/10 hover:text-white'}`}>
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-serif text-[#1A1A1A]">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[#737373]">Admin User</span>
            <div className="w-10 h-10 rounded-full bg-[#E5E5E5] border border-[#1A1A1A]/10"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.title}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-white p-6 border border-[#E5E5E5] shadow-sm rounded-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-[#FAFAFA] rounded-md text-[#1A1A1A]">
                  <stat.icon size={20} />
                </div>
                <span className={`text-xs font-semibold ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{stat.trend}</span>
              </div>
              <h3 className="text-[#737373] text-sm uppercase tracking-wider mb-1">{stat.title}</h3>
              <span className="text-2xl font-serif font-semibold text-[#1A1A1A]">{stat.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="bg-white border border-[#E5E5E5] rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E5E5] bg-[#FAFAFA]">
            <h3 className="font-serif text-lg text-[#1A1A1A]">Recent Orders</h3>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs uppercase tracking-wider text-[#737373] border-b border-[#E5E5E5]">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Product</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#ORD-1029', name: 'James Wilson', product: 'Heritage Classic', amount: '$18,500', status: 'Processing' },
                { id: '#ORD-1028', name: 'Sarah Chen', product: 'Ascent Chronograph', amount: '$24,200', status: 'Shipped' },
                { id: '#ORD-1027', name: 'Michael Brown', product: 'Horizon Tourbillon', amount: '$85,000', status: 'Delivered' },
              ].map((order, i) => (
                <tr key={order.id} className="border-b border-[#E5E5E5] hover:bg-[#FAFAFA] transition-colors text-sm">
                  <td className="p-4 text-[#1A1A1A] font-medium">{order.id}</td>
                  <td className="p-4 text-[#737373]">{order.name}</td>
                  <td className="p-4 text-[#737373]">{order.product}</td>
                  <td className="p-4 font-serif text-[#1A1A1A]">{order.amount}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
