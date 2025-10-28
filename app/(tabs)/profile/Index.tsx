import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useAuth } from "../../../contexts/AuthContext";
import { usePermissions } from "../../../hooks/usePermissions";
import { HasPermission } from "../../../components/auth/HasPermission";

const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const { getUserPermissions } = usePermissions();

  const handleLogout = async () => {
    await logout();
  };

  const userPermissions = getUserPermissions();

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-6">Mi Perfil</Text>
      
      <View className="bg-gray-50 p-4 rounded-lg mb-6">
        <Text className="text-lg font-semibold mb-2">{user?.firstName} {user?.lastName}</Text>
        <Text className="text-gray-600 mb-1">{user?.email}</Text>
        <Text className="text-sm text-blue-600 capitalize">{user?.role?.replace('_', ' ')}</Text>
        {user?.store_id && (
          <Text className="text-xs text-gray-500 mt-1">Store: {user.store_id}</Text>
        )}
      </View>
      
      <HasPermission permission="roles:read">
        <View className="bg-blue-50 p-4 rounded-lg mb-6">
          <Text className="text-lg font-semibold mb-3">Mis Permisos</Text>
          <View className="flex-row flex-wrap">
            {userPermissions.map((permission, index) => (
              <View key={index} className="bg-blue-100 px-2 py-1 rounded m-1">
                <Text className="text-xs text-blue-800">{permission}</Text>
              </View>
            ))}
          </View>
        </View>
      </HasPermission>
      
      <TouchableOpacity
        className="bg-red-500 rounded-lg p-4"
        onPress={handleLogout}
      >
        <Text className="text-white text-center font-semibold">Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;
