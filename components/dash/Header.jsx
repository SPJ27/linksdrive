'use client'
import { useState } from 'react'
import { CirclePlus, X } from 'lucide-react'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    url: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('New item:', formData)
    setShowModal(false)
    setFormData({ name: '', desc: '', url: '' })
  }

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between px-16 py-4">
        <h1 className="text-2xl font-bold">My Links</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center font-medium py-2 rounded px-5 text-white bg-[#191919] hover:bg-[#333333] transition-colors"
        >
          <CirclePlus className="mr-2 h-4 w-4" />
          Add New
        </button>
      </div>

      {/* Modal with blurred background */}
      {showModal && (
        <div className="fixed shadow-2xl inset-0 z-50">
          {/* Blurred overlay */}
          <div 
            className="absolute inset-0  bg-opacity-10 backdrop-blur-xs"
            onClick={() => setShowModal(false)}
          />
          
          {/* Modal content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6">
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <h2 className="text-xl font-bold">Add New Link</h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={formData.desc}
                      onChange={(e) => setFormData({...formData, desc: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                    <input
                      type="url"
                      value={formData.url}
                      onChange={(e) => setFormData({...formData, url: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header