/**
 * Функция-декоратор для того, чтобы узнать тип маркера
 */
export function checkMarkerType(expectedType) {
  return function (target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      const marker = args[5]; // Предполагается, что объект маркера передаётся первым аргументом

      if (marker && marker.type !== expectedType) {
        console.warn(
          `Неверный тип маркера. Ожидался: ${expectedType}, получен: ${marker.type}`
        );
        return;
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
