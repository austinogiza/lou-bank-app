import ScreensWrapper from "@/src/components/wrapper/screens-wrapper"
import { X as Xmark } from "lucide-react-native"
import React, { FC, useState } from "react"
import { Modal, Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"
interface CloseAccountModalProps {
  visible: boolean
  onClose: () => void
  onDelete: () => void
}

const CloseAccountModal: FC<CloseAccountModalProps> = (props) => {
  const { visible, onClose, onDelete } = props
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={tw`flex-1 bg-black/80 justify-end`}>
        <View style={tw`bg-black rounded-t-3xl p-6`}>
          <View style={tw`flex-row items-center justify-between mb-6`}>
            <Text style={tw`text-white font-semibold text-lg`}>
              Close Account
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Xmark width={24} height={24} color="white" />
            </TouchableOpacity>
          </View>

          <Text style={tw`text-white text-xl font-bold mb-2`}>
            Are you sure you want to close account?
          </Text>

          <Text style={tw`text-gray-400 text-sm mb-8`}>
            You gonna close the account but you can reopen just by log in
          </Text>

          <View style={tw`flex-row gap-4`}>
            <TouchableOpacity
              style={tw`flex-1 bg-transparent border border-gray-600 py-4 rounded-full`}
              onPress={onClose}
            >
              <Text style={tw`text-white text-center font-semibold text-base`}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`flex-1 bg-red-600 py-4 rounded-full`}
              onPress={onDelete}
            >
              <Text style={tw`text-white text-center font-semibold text-base`}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default CloseAccountModal
